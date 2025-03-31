import { Container } from '../components/container'
import { Footer } from '../components/footer'
import { GradientBackground } from '../components/gradient'
import { Navbar } from '../components/navbar'
import { Heading, Lead, Subheading } from '../components/text'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { posts } from '../utils/blogs'
// import Image from 'next/image'
import { generateMetadata } from '@/app/utils/generate-metadata-service';
import { img as Image } from "./mdx";
import CodeSnippet20250221 from "@/images/changelog/CodeSnippet20250221.png";
import { SparkleIcon } from '../changelog/components/SparkleIcon'

export const runtime = 'edge';

const title = "Walnut blog";
const description = "At Walnut we develop tools for blockchain engineers, with a specific focus on Starknet.";
export const metadata: Metadata = generateMetadata(title, description, 'https://www.walnut.network/blog/blog');

const postsPerPage = 5


async function Posts({ page }: { page: number; }) {
  if (posts.length === 0 && (page > 1 )) {
    notFound()
  }

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>
  }

  return (
    <div className="mt-6">
      {/* {posts.map((post) => (
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
      ))} */}
      <div className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3">
      <div>
            <h2 className="font-bold text-2xl">
            Call Trace Preview in Debugger
            </h2>
              <div className="mt-2.5 flex items-center gap-3">
                <div className="text-sm/5 text-gray-700">
                  February 21, 2025
                </div>
              </div>
          </div>
        <div className="sm:col-span-2 sm:max-w-4xl">
        <Image src={CodeSnippet20250221} alt="call-trace-preview" unoptimized />
          <>
            <h2 className="font-bold my-4 text-xl">
              Call Trace Preview in Debugger
            </h2>
            <p className="text-gray-500">
              This week, we improved the debugging experience by integrating the
              Call Trace directly into the debugger window. Users can now track
              code execution and the full call trace side by side, making it
              easier to analyze transactions and debug complex interactions.
            </p>
            <h3 className="flex items-center gap-2 font-bold my-4 text-base">
              <SparkleIcon className="w-5 h-5" /> More improvements
            </h3>
            <ul className="list-disc text-gray-500 pl-6">
              <li>
                The debugger window now has three panels: Function Call Details,
                Call Trace Preview, and File Explorer.
              </li>
              <li>
                Events are now visible in the Call Trace, linked to their
                corresponding function calls.
              </li>
              <li>
                Enhanced Events tab with Contract address and Event selector
                information.
              </li>
              <li>Added horizontal scrolling in the Events tab.</li>
            </ul>
          </>
        </div>

      </div>
      <div className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3">
      <div>
        <h2 className="font-bold text-2xl">
        Call Trace Preview in Debugger
        </h2>
          <div className="mt-2.5 flex items-center gap-3">
            <div className="text-sm/5 text-gray-700">
              February 21, 2025
            </div>
          </div>
      </div>
        <div className="sm:col-span-2 sm:max-w-4xl">
        <Image src={CodeSnippet20250221} alt="call-trace-preview" unoptimized />
          <>
            <h2 className="font-bold my-4 text-xl">
              Call Trace Preview in Debugger
            </h2>
            <p className="text-gray-500">
              This week, we improved the debugging experience by integrating the
              Call Trace directly into the debugger window. Users can now track
              code execution and the full call trace side by side, making it
              easier to analyze transactions and debug complex interactions.
            </p>
            <h3 className="flex items-center gap-2 font-bold my-4 text-base">
              <SparkleIcon className="w-5 h-5" /> More improvements
            </h3>
            <ul className="list-disc text-gray-500 pl-6">
              <li>
                The debugger window now has three panels: Function Call Details,
                Call Trace Preview, and File Explorer.
              </li>
              <li>
                Events are now visible in the Call Trace, linked to their
                corresponding function calls.
              </li>
              <li>
                Enhanced Events tab with Contract address and Event selector
                information.
              </li>
              <li>Added horizontal scrolling in the Events tab.</li>
            </ul>
          </>
        </div>

      </div>
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
        <Subheading className="mt-16">Walnut</Subheading>
        <Heading as="h1" className="mt-2">
          Changelog
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          All the latest Walnut news, straight from the team.
        </Lead>
      </Container>
      <Container className="mt-16 pb-24">
        <Posts page={page} />
      </Container>
      <Footer />
    </main>
  )
}
