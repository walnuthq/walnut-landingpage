import { Footer } from '@/components/Footer'
import BlogHeader from '@/app/blog/components/BlogHeader';

export default function Blog() {
	return <>
		<BlogHeader />
		<div>
            <div className="max-w-8xl mx-auto">
                <div className="flex px-4 pt-8 pb-10 lg:px-8">
                    <a className="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900" href="/blog">
                        <svg viewBox="0 -9 3 24" className="overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600">
                            <path d="M3 0L0 3L3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        Go back
                    </a>
                </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <main>
                        <article className="relative pt-10">
                            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl ">
                            Welcome to Walnut blog
                            </h1>
                            <div className="text-sm leading-6">
                                <dl>
                                    <dt className="sr-only">Date</dt>
                                    <dd className="absolute top-0 inset-x-0 text-slate-700">
                                        Saturday, December 23, 2023
                                    </dd>
                                </dl>
                            </div>
                            <div className="mt-6">
                                <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                                    <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                                        {/* <img src="/_next/static/media/adamwathan.8adb7a70.jpg" alt="" className="mr-3 w-9 h-9 rounded-full bg-slate-50" decoding="async" /> */}
                                        <div className="text-sm leading-4">
                                            <div className="text-slate-900">
                                                Roman Mazur
                                            </div>
                                            <div className="mt-1">
                                                <a target='_blank' href="https://twitter.com/romanmazur" className="text-sky-500 hover:text-sky-600">@romanmazur</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 mb-24 prose">
                                <p className="lead">We are excited to launch this blog as a platform to share our experiences, challenges, and advancements in developing tools for blockchain engineers, focusing specifically on Starknet. Our goal is to foster insightful discussions and actively engage with community feedback.</p>
                                <p>Our mission is clear:</p>
                                <blockquote>
                                <p>We aim to empower every Starknet developer to achieve more.</p>
                                </blockquote>
                                <p>Our first product is a visual, step-by-step debugger designed for Starknet developers who work with Cairo. Currently in its closed Beta stage, we anticipate launching in Q1 2024. Walnut fills a critical gap building the first debugger for Cairo. If you&apos;re interested in early access, we&apos;d love to hear from you.</p>
                                <p>While we recognize that a debugger alone is not enough to fulfill our mission for the rapidly expanding Starknet developer community, we see it as a crucial step. Beyond debugger, we plan to create an array of tools for Starknet developers. While we anticipate that what we build will depend on the state of Starknet tooling at the time we start the work, we are still listing some examples of tools and areas we are particularly interested in. If these areas interest you, or if you&apos;re actively involved in them, we encourage you to reach out and connect with us.</p>

                                <p><strong>Storage diff visualization.</strong> On Starknet, the majority of transaction costs come from storage. Developers need better tooling to get visibility into smart contract storage, how transactions affect it, so that they can reduce the memory footprint.</p>

                                <p><strong>Gas profiling.</strong> Execution on Starknet is generally cheap, but developers still need visibility into gas consumption. Poorly written contracts can eat a lot of gas, even on Starknet, and a good gas profiler can offer monitoring over such situations and ability to improve the gas footprint.</p>

                                <p><strong>Enhanced Cairo language server.</strong> We would like to see the Cairo server to be enhanced with advanced features like seeing gas consumption of a function right inside the code editor.</p>

                                <p><strong>Web 3 actions</strong> will allow Starknet developers to create custom actions that execute on a predefined set of on-chain events. Example: send Telegram notification when a loan health factor drops below a certain percentage.</p>

                                <p><strong>Transaction simulator and dApp monitoring</strong> allows developers to test out transactions and see outcomes before sending them on-chain. dApp developers can use simulations to get visibility into failures their users can run into, without needing the user to contact support.</p>

                                <p><strong>Shared devnets</strong> will allow developer teams to collaborate on their app in a private, hosted environment.</p>

                                <p>
                                Blockchain technology, with Starknet at its forefront, is poised to revolutionize the world. Starknet&apos;s vision, <a href="https://community.starknet.io/t/starknet-vision/101255" target='_blank'>enabling individuals to freely implement and use any social function they desire</a>, is a testament to the transformative power of blockchain. Developers are key to this change. With tools like the debugger and our upcoming developments, we&apos;re dedicated to supporting developers who will be instrumental in ensuring the success and growth of Starknet&apos;s ecosystem.
                                </p>

                                <p className='mt-12 text-gray-500'>* According to a detailed <a href="https://www.developerreport.com/" target="_blank">report by Electric Capital</a>, Starknet has the fastest-growing number of full-time developers compared to other layer&nbsp;two ecosystems. Among the top 20 ecosystems (measured by full-time developers), Starknet&apos;s number of full-time developers has increased by an incredible 622% in the last two years. This growth is much higher than Osmosis at 194% and Arbitrum at 125%, who are at 2nd and 3rd place respectively.</p>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>
		<Footer />
	</>
}
