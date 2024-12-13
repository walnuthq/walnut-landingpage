import dayjs from "dayjs"
import { posts } from "../utils/blogs"
import Image from "next/image"


export default function BlogSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the Walnut blog</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
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
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={`/new-landing/blog/${post.slug}`}>
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
