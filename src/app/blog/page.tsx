import { Button } from '../../components/button'
import { Container } from '../../components/container'
import { GetStarted } from '../../components/get-started'
import { Link } from '../../components/link'
import { Heading, Lead, SectionHeading } from '../../components/text'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { posts } from '../utils/blogs'
import Image from 'next/image'
import { generateMetadata } from '@/app/utils/generate-metadata-service'
import MainHeader from '../../components/main-header'
import { Footer } from '@/components/footer'

export const runtime = 'edge'

const title = 'Walnut blog'
const description = 'At Walnut we develop tools for blockchain engineers, with a specific focus on Starknet.'
export const metadata: Metadata = generateMetadata(
  title,
  description,
  'https://www.walnut.network/blog/blog',
)

const postsPerPage = 5

function paginate<T>(items: T[], page: number, perPage: number) {
  const start = (page - 1) * perPage
  return items.slice(start, start + perPage)
}

async function LastPosts() {
  if (posts.length === 0) {
    return null
  }

  return (
    <div className="mt-16 bg-gradient-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Pinned posts</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <div
              key={post.slug}
              className="relative flex flex-col rounded-3xl hover:bg-GREY transition-all bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5"
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
                <div className="mt-2 text-lg/7 font-medium">
                  <Link href={`/blog/${post.slug}`} className="text-BLACK">
                    <span className="absolute inset-0 " />
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

async function Posts({ page }: { page: number }) {
  const paginatedPosts = paginate(posts, page, postsPerPage)

  if (paginatedPosts.length === 0 && page > 1) {
    notFound()
  }

  if (paginatedPosts.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>
  }

  return (
    <div className="mt-6">
      {paginatedPosts.map((post) => (
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
            <h2 className="text-base/5 font-medium text-BLACK transition-all">
              {post.title}
            </h2>
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

async function Pagination({ page }: { page: number }) {
  const totalPosts = posts.length
  const pageCount = Math.ceil(totalPosts / postsPerPage)

  if (pageCount < 2) {
    return null
  }

  function url(nextPage: number) {
    const params = new URLSearchParams()
    if (nextPage > 1) params.set('page', nextPage.toString())
    return params.size ? `/blog?${params.toString()}` : '/blog'
  }

  const hasPreviousPage = page > 1
  const hasNextPage = page < pageCount

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        variant="outline"
        href={hasPreviousPage ? url(page - 1) : undefined}
        disabled={!hasPreviousPage}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>

      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => {
          const pageNumber = i + 1
          return (
            <Link
              key={pageNumber}
              href={url(pageNumber)}
              data-active={pageNumber === page || undefined}
              className={clsx(
                'size-7 rounded-lg text-center text-sm/7 font-medium',
                'data-[hover]:bg-gray-100',
                'data-[active]:shadow data-[active]:ring-1 data-[active]:ring-black/10',
                'data-[active]:data-[hover]:bg-gray-50',
              )}
            >
              {pageNumber}
            </Link>
          )
        })}
      </div>

      <Button
        variant="outline"
        href={hasNextPage ? url(page + 1) : undefined}
        disabled={!hasNextPage}
      >
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
  const totalPosts = posts.length
  const pageCount = Math.max(1, Math.ceil(totalPosts / postsPerPage))

  const page =
    'page' in searchParams
      ? typeof searchParams.page === 'string' && parseInt(searchParams.page) > 1
        ? parseInt(searchParams.page)
        : notFound()
      : 1

  if (page > pageCount) {
    notFound()
  }

  return (
    <main className="overflow-hidden relative">
      <MainHeader />
      <Container>
        <SectionHeading className="mt-32 mx-auto text-center">
          Blog
        </SectionHeading>
        <Heading as="h1" className="mt-2 mx-auto text-center">
          What’s happening at Walnut.
        </Heading>
        <Lead className="mt-6 max-w-3xl mx-auto text-center">
          All the latest Walnut news, straight from the team.
        </Lead>
      </Container>

      {page === 1 && <LastPosts />}

      <Container className="mt-16 pb-24">
        <Posts page={page} />
        <Pagination page={page} />
      </Container>

      <GetStarted />
      <Footer />
    </main>
  )
}
