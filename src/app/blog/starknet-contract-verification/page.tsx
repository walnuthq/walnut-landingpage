import { Footer } from '@/components/Footer'
import BlogHeader from '@/app/blog/components/BlogHeader';

import Image from 'next/image';

import TenderlyGasProfiler from "@/images/blog/tenderly-gas-profiler.webp";

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
                              Announcing Contract Verification on Starknet
                            </h1>
                            <div className="text-sm leading-6">
                                <dl>
                                    <dt className="sr-only">Date</dt>
                                    <dd className="absolute top-0 inset-x-0 text-slate-700">
                                        Monday, August 12, 2024
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
                                <p className="lead">We are excited to introduce Cairo contract verification for Starknet, now live on Walnut and accessible via Walnut APIs.</p>
                                <p>Any Cairo developer can now easily verify their Cairo smart contracts on Walnut. Once a contract is verified, its source code becomes publicly available, fostering transparency and trust within the community.</p>
                                
                                <p>Initially, contract verification is available for Cairo 2.6.3 and 2.6.4 versions. We are actively working on adding support for additional Cairo versions in the coming days and weeks to ensure broad compatibility.</p>
                                
                                <p>Building contract verification marks a significant milestone in our journey to develop Walnut, a comprehensive transaction debugger for Starknet. Verified contracts on Walnut provide developers with access to a full call trace and a step-by-step transaction debugger, greatly enhancing the development and debugging process.</p>
                                
                                <h2>Private vs. Public Contract Verification</h2>

                                <p>Currently, all verified contracts on Walnut are publicly accessible. However, we understand that some teams may prefer to keep their code private while still accessing the Walnut transaction debugger. To accommodate this, we plan to introduce private verification. This feature will allow teams to verify contracts in a secure, private environment, providing access to all debugging tools without publicly exposing their code. If you&apos;re interested in this feature, <a href="https://t.me/walnuthq" target="_blank">let us know</a>.</p>

                                <p>To learn more about how to verify Cairo contracts with Walnut, <a href="https://docs.walnut.dev/" target="_blank">head to our documentation</a>.</p>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>
		<Footer />
	</>
}
