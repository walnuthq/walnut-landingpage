import { Button } from '../components/button'
import { Container } from '../components/container'
import { Footer } from '../components/footer'
import { GradientBackground } from '../components/gradient'
import { Link } from '../components/link'
import { Navbar } from '../components/navbar'
import { Heading, Lead, Subheading } from '../components/text'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { posts } from '../utils/blogs'
import Image from 'next/image'
export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'All the latest Walnut news, straight from the team.',
}

const postsPerPage = 5

async function LastPosts() {


  if (posts.length === 0) {
    return
  }

  return (
    <div className="mt-16 bg-gradient-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Last posts</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {posts.map((post, index) => 
            index < 3 && (
            <div
              key={post.slug}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5"
            >
              {post.mainImage && (
                <Image
                  alt={''}
                  src={post.mainImage}
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {post.excerpt}
                </div>
                {post.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <Image
                        alt=""
                        src={post.author.image}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                    )}
                    <div className="text-sm/5 text-gray-700">
                      {post.author.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

async function Posts({ page }: { page: number; }) {
  if (posts.length === 0 && (page > 1 )) {
    notFound()
  }

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>
  }

  return (
    <div className="mt-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
              {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
            </div>
            {post.author && (
              <div className="mt-2.5 flex items-center gap-3">
                {post.author.image && (
                  <Image
                    alt=""
                    src={post.author.image}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5 text-gray-700">
                  {post.author.name}
                </div>
              </div>
            )}
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-sm/5 font-medium">{post.title}</h2>
            <p className="mt-3 text-sm/6 text-gray-500">{post.excerpt}</p>
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1 text-sm/5 font-medium"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

async function Pagination({
  page,
}: {
  page: number
}) {
  function url(page: number) {
    let params = new URLSearchParams()

    if (page > 1) params.set('page', page.toString())

    return params.size !== 0 ? `/blog?${params.toString()}` : '/blog'
  }

  let totalPosts = posts.length
  let hasPreviousPage = page - 1
  let previousPageUrl = hasPreviousPage ? url(page - 1) : undefined
  let hasNextPage = page * postsPerPage < totalPosts
  let nextPageUrl = hasNextPage ? url(page + 1) : undefined
  let pageCount = Math.ceil(totalPosts / postsPerPage)

  if (pageCount < 2) {
    return
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        variant="outline"
        href={previousPageUrl}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              'size-7 rounded-lg text-center text-sm/7 font-medium',
              'data-[hover]:bg-gray-100',
              'data-[active]:shadow data-[active]:ring-1 data-[active]:ring-black/10',
              'data-[active]:data-[hover]:bg-gray-50',
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button variant="outline" href={nextPageUrl} disabled={!nextPageUrl}>
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export default async function Blog({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let page =
    'page' in searchParams
      ? typeof searchParams.page === 'string' && parseInt(searchParams.page) > 1
        ? parseInt(searchParams.page)
        : notFound()
      : 1

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Blog</Subheading>
        <Heading as="h1" className="mt-2">
          What’s happening at Walnut.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          All the latest Walnut news, straight from the team.
        </Lead>
      </Container>
      {page === 1 && <LastPosts />}
      <Container className="mt-16 pb-24">
        <Posts page={page} />
        <Pagination page={page}  />
      </Container>
      <Footer />
    </main>
  )
}
