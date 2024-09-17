import { Footer } from "@/components/Footer";
import BlogHeader from "@/app/blog/components/BlogHeader";

export default function Blog() {
  return (
    <>
      <BlogHeader />
      <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
        <header className="py-16 sm:text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-gray-900 font-bold">
            Latest Updates
          </h1>

          <p className="text-lg text-gray-700">
            All the latest Walnut news, straight from the&nbsp;team.
          </p>
          {/* <section className="mt-3 max-w-sm sm:mx-auto sm:px-4">
					<h2 className="sr-only">Sign up for our newsletter</h2>
					<form action="https://app.convertkit.com/forms/3181837/subscriptions" method="post" className="flex flex-wrap -mx-2"><div className="px-2 grow-[9999] basis-64 mt-3"><div className="group relative"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-6 h-full absolute inset-y-0 left-3 text-slate-400 pointer-events-none group-focus-within:text-sky-500 dark:group-focus-within:text-slate-400"><path d="M5 7.92C5 6.86 5.865 6 6.931 6h10.138C18.135 6 19 6.86 19 7.92v8.16c0 1.06-.865 1.92-1.931 1.92H6.931A1.926 1.926 0 0 1 5 16.08V7.92Z"></path><path d="m6 7 6 5 6-5"></path></svg>
					<input name="email_address" type="email" required="" autocomplete="email" aria-label="Email address" className="appearance-none shadow rounded-md ring-1 ring-slate-900/5 leading-5 sm:text-sm border border-transparent py-2 placeholder:text-slate-400 pl-12 pr-3 block w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700/20 dark:ring-slate-200/20 dark:focus:ring-sky-500 dark:text-white" placeholder="Subscribe via email" />
					</div>
					</div><div className="px-2 grow flex mt-3"><button type="submit" className="bg-sky-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700">Subscribe</button></div></form>
				</section> */}
        </header>

        <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
          <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 sm:block"></div>

          <div className="space-y-16">
            <article className="relative group">
              <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-gray-50/90"></div>
              <svg
                viewBox="0 0 9 9"
                className="hidden absolute right-full mr-6 top-2 text-gray-200 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
              >
                <circle
                  cx="4.5"
                  cy="4.5"
                  r="4.5"
                  stroke="currentColor"
                  className="fill-white"
                  strokeWidth="2"
                ></circle>
              </svg>
              <div className="relative">
                <h3 className="text-base font-semibold tracking-tight text-gray-900 pt-8 lg:pt-0">
                  cairovm.codes – Run, Debug, and Learn Cairo Programming
                </h3>
                <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 line-clamp-2">
                  <p>
                    Explore cairovm.codes, the web app for running, debugging,
                    and learning Cairo programming. Officially recognized by
                    Starkware, packed with powerful features.
                  </p>
                </div>
                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                  <dt className="sr-only">Date</dt>
                  <dd className="whitespace-nowrap text-sm leading-6">
                    September 16, 2024
                  </dd>
                </dl>
              </div>
              <a
                className="flex items-center text-sm text-pink-600 font-medium"
                href="/blog/cairovm-codes-debug-learn-cairo"
              >
                <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
                <span className="relative">
                  Read more
                  <span className="sr-only">
                    , cairovm.codes – Run, Debug, and Learn Cairo Programming
                  </span>
                </span>
                <svg
                  className="relative mt-px overflow-visible ml-2.5 text-pink-600"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </article>
            <article className="relative group">
              <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-gray-50/90"></div>
              <svg
                viewBox="0 0 9 9"
                className="hidden absolute right-full mr-6 top-2 text-gray-200 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
              >
                <circle
                  cx="4.5"
                  cy="4.5"
                  r="4.5"
                  stroke="currentColor"
                  className="fill-white"
                  strokeWidth="2"
                ></circle>
              </svg>
              <div className="relative">
                <h3 className="text-base font-semibold tracking-tight text-gray-900 pt-8 lg:pt-0">
                  Announcing Contract Verification on Starknet
                </h3>
                <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 line-clamp-2">
                  <p>
                    We are excited to introduce Cairo Contract Verification for
                    Starknet, now live on Walnut and accessible via Walnut APIs.
                  </p>
                </div>
                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                  <dt className="sr-only">Date</dt>
                  <dd className="whitespace-nowrap text-sm leading-6">
                    August 12, 2024
                  </dd>
                </dl>
              </div>
              <a
                className="flex items-center text-sm text-pink-600 font-medium"
                href="/blog/starknet-contract-verification"
              >
                <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
                <span className="relative">
                  Read more
                  <span className="sr-only">
                    , Announcing Starknet Contract Verification
                  </span>
                </span>
                <svg
                  className="relative mt-px overflow-visible ml-2.5 text-pink-600"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </article>
            <article className="relative group">
              <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-gray-50/90"></div>
              <svg
                viewBox="0 0 9 9"
                className="hidden absolute right-full mr-6 top-2 text-gray-200 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
              >
                <circle
                  cx="4.5"
                  cy="4.5"
                  r="4.5"
                  stroke="currentColor"
                  className="fill-white"
                  strokeWidth="2"
                ></circle>
              </svg>
              <div className="relative">
                <h3 className="text-base font-semibold tracking-tight text-gray-900 pt-8 lg:pt-0">
                  Why blockchains mark a new era for debugging and monitoring
                  services
                </h3>
                <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 line-clamp-2">
                  <p>
                    Blockchain technology will revolutionize the $100 billion+
                    application monitoring market, demanding new specialized
                    tools and creating major opportunities.
                  </p>
                </div>
                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                  <dt className="sr-only">Date</dt>
                  <dd className="whitespace-nowrap text-sm leading-6">
                    July 06, 2024
                  </dd>
                </dl>
              </div>
              <a
                className="flex items-center text-sm text-pink-600 font-medium"
                href="/blog/why-blockchains-mark-new-era-for-debugging-and-monitoring-services"
              >
                <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
                <span className="relative">
                  Read more
                  <span className="sr-only">
                    , Why does Starknet need a debugger?
                  </span>
                </span>
                <svg
                  className="relative mt-px overflow-visible ml-2.5 text-pink-600"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </article>
            <article className="relative group">
              <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-gray-50/90"></div>
              <svg
                viewBox="0 0 9 9"
                className="hidden absolute right-full mr-6 top-2 text-gray-200 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
              >
                <circle
                  cx="4.5"
                  cy="4.5"
                  r="4.5"
                  stroke="currentColor"
                  className="fill-white"
                  strokeWidth="2"
                ></circle>
              </svg>
              <div className="relative">
                <h3 className="text-base font-semibold tracking-tight text-gray-900 pt-8 lg:pt-0">
                  Why does Starknet need a debugger?
                </h3>
                <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 line-clamp-2">
                  <p>
                    In this article, we&apos;ll explore current challenges
                    developers face with debugging transactions on Starknet.
                  </p>
                </div>
                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                  <dt className="sr-only">Date</dt>
                  <dd className="whitespace-nowrap text-sm leading-6">
                    December 29, 2023
                  </dd>
                </dl>
              </div>
              <a
                className="flex items-center text-sm text-pink-600 font-medium"
                href="/blog/why-does-starknet"
              >
                <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
                <span className="relative">
                  Read more
                  <span className="sr-only">
                    , Why does Starknet need a debugger?
                  </span>
                </span>
                <svg
                  className="relative mt-px overflow-visible ml-2.5 text-pink-600"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </article>
						<article className="relative group">
						<div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-gray-50/90"></div>
						<svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-2 text-gray-200 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"><circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white" strokeWidth="2"></circle></svg>
						<div className="relative">
							<h3 className="text-base font-semibold tracking-tight text-gray-900 pt-8 lg:pt-0">
								Welcome to Walnut
							</h3>
							<div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 line-clamp-2">
								<p>Welcome to our blog focused on Starknet developer tooling development. Our first highlight is the Walnut Debugger, a game-changer for Cairo developers, now in closed Beta and set for a Q1 2024 release.</p>
							</div>
							<dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
								<dt className="sr-only">Date</dt>
								<dd className="whitespace-nowrap text-sm leading-6">
									December 23, 2023
								</dd>
							</dl>
						</div>
						<a className="flex items-center text-sm text-pink-600 font-medium" href="/blog/welcome">
							<span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
							<span className="relative">Read more<span className="sr-only">, Welcome to Walnut Blog</span></span>
							<svg className="relative mt-px overflow-visible ml-2.5 text-pink-600" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
						</a>
					</article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
