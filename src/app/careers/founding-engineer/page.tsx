import { Footer } from '@/components/Footer'
import BlogHeader from '@/app/blog/components/BlogHeader';

export default function Position() {
	return <>
		<BlogHeader />
		<div>
            <div className="max-w-8xl mx-auto">
                <div className="flex px-4 pt-8 pb-10 lg:px-8">
                    <a className="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900" href="/">
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
                            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl flex">
                            Founding Engineer
                                <img width="50" height="50" src="https://img.icons8.com/ios-filled/100/F25081/link--v1.png" alt="link--v1"/>
                            </h1>
                            <div className="mt-6">
                                <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                                    <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                                        <div className="text-sm leading-4">
                                            <div className="text-slate-900 flex gap-2 items-center">
                                                <span>
                                                Location: Remote, Europe
                                                </span>
                                                <span>
                                                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-500" aria-hidden="true">
                                                    <circle cx="1" cy="1" r="1" />
                                                </svg>
                                                </span>
                                                <span>
                                                <a target='_blank' href="mailto:hi@walnut.dev" className="text-sky-500 hover:text-sky-600">Send your CV</a>
                                                </span>
                                            </div>
                                            <div className="mt-1">
                                                
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 mb-24 prose">
                                <p className="lead">We are excited to launch this blog as a platform for sharing our experiences, challenges, and advancements in developing tools for blockchain engineers, with a specific focus on Starknet. Our goal is to foster insightful discussions and actively engage with community feedback.</p>
                                <p>Our mission is clear:</p>
                                <blockquote>
                                <p>We aim to empower every Starknet developer to achieve more.</p>
                                </blockquote>
                                <p>Our first product, the Walnut Debugger, is a visual, step-by-step debugger designed for Starknet developers who work with Cairo. Currently in its closed Beta stage, we anticipate launching in Q1 2024. The Walnut Debugger fills a critical gap by being the first debugger built for Cairo. If you&apos;re interested in early access, we&apos;d love to hear from you.</p>
                                <p>While we recognize that a debugger alone is not enough to fulfill our mission for the rapidly expanding Starknet developer community, we see it as a crucial step. With this understanding, let&apos;s delve into other areas and tools we at Walnut are developing, each tailored to address specific challenges Starknet developers face.</p>

                                <ul>
                                    <li>
                                        <p><strong>Storage diff visualization.</strong> Developers need better visibility into smart contract storage and how transactions affect it. This tool is particularly useful for optimizing smart contract memory. On Starknet, transaction costs are mostly impacted by storage, therefore the ability to optimize storage is vital.</p>
                                    </li>
                                    <li>
                                        <p><strong>Gas profiling.</strong> Starknet&apos;s execution may be generally cheap, but visibility into gas consumption is still necessary. Poorly written contracts can consume excessive gas, even on Starknet. Gas profilers offer monitoring capabilities and assist in improving the gas footprint.</p>
                                    </li>
                                    <li>
                                        <p><strong>Web 3 actions</strong> enable developers to write custom code that executes in response to predefined on-chain events on Starknet. For instance, a developer could set up a Telegram notification when a loan health factor drops below a certain percentage.</p>
                                    </li>
                                    <li>
                                        <p><strong>Transaction simulator and dApp monitoring tools.</strong> Simulations allow developers to test transactions and see outcomes without the need to send them on-chain and pay for gas. Monitoring tools based on these simulations provide dApp developers with insights into potential user issues, reducing the need for direct user support interaction.</p>
                                    </li>
                                    <li>
                                        <p><strong>Shared devnets</strong> provide Starknet developer teams with a collaborative environment for writing smart contracts and dApps. Unlike public testnets, shared devnets offer privacy for projects and a gas-free environment.</p>
                                    </li>
                                </ul>

                                <p>If any of these areas interest you, or if you&apos;re actively involved in them, we encourage you to reach out and connect with us.</p>

                                <p>
                                    Blockchain technology, with Starknet at its forefront, is poised to revolutionize the world. Starknet&apos;s vision, <a href="https://community.starknet.io/t/starknet-vision/101255" target='_blank'>enabling individuals to freely implement and use any social function they desire</a>, is a testament to the transformative power of blockchain. Developers are key to this change. With tools like the Walnut Debugger and our upcoming developments at Walnut, we&apos;re dedicated to supporting developers who will play a key role in ensuring the success and growth of Starknet&apos;s ecosystem.
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
