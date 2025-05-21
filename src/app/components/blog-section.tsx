import dayjs from "dayjs"
import { posts } from "../utils/blogs"
import Image from "next/image"
import { Heading, SectionHeading } from "./text"


export default function BlogSection() {
  return (
    <div className="py-24 sm:py-32 bg-WHITE">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading className='mx-auto text-center'>Blog</SectionHeading>
          <Heading as="h3" className="text-pretty text-3xl/[1.2] mt-2 tracking-tight text-BLACK sm:text-[3.75rem]/[3.5rem]">From the Walnut blog</Heading>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => index < 3 && (
            <article key={post.slug} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <div className="text-gray-500">
                  {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
                </div>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-BLACK hover:text-BLUE transition-all">
                  <a href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.excerpt}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
              {post.author.image && ( <Image alt={""} src={post.author.image} className="h-10 w-10 rounded-full bg-gray-50" />)}
                <div className="text-sm/6">
                  <div className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
