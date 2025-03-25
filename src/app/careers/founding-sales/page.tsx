import { Footer } from '@/components/Footer'
import BlogHeader from '@/app/blog/components/BlogHeader';
import Link from 'next/link';

export default function FoundingPosition() {
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
                            Founding Sales & Business Development Lead
                                🔗
                            </h1>
                            <div className="mt-6">
                                <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                                    <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                                        <div className="text-sm leading-4">
                                            <div className="text-slate-900 flex gap-x-3 items-center text-base">
                                                Location: Remote
                                                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-500" aria-hidden="true">
                                                    <circle cx="1" cy="1" r="1" />
                                                </svg>
                                                <a target='_blank' href="mailto:hi@walnut.dev" className="text-pink-600 hover:text-pink-800">Send your CV</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 mb-24 prose">

                                <h2>About Walnut</h2>
                                <p>
                                  Walnut offers cutting-edge security services for leading blockchain companies. We partner with multi-billion-dollar projects such as Starknet, Aztec, Polygon, Optimism, and Arbitrum. Our mission is clear: secure the onchain economy by empowering developers (and agents) with world-class tooling.
                                </p>
                                <p>
                                  We’re a team of engineers deeply passionate about developer tools and blockchain security. We have raised a $1M seed round, are already profitable, and are now ready for rapid growth.
                                </p>
                                <h2>Why This Role</h2>
                                <p>
                                This is our first business hire, and you&apos;ll have complete autonomy to shape and execute Walnut’s go-to-market strategy from scratch. You&apos;ll work with the CEO daily, defining outreach strategies, closing deals, and building meaningful partnerships. This is a unique opportunity to deeply immerse yourself in the web3 space, working with leading teams in smart contract protocols across DeFi, gaming, and other cutting-edge blockchain verticals.
                                </p>

                                <h2>What You&apos;ll Do</h2>
                                <ul className="marker:text-pink-600 list-disc pl-5 space-y-3">
                                    <li>
                                      Identify, reach out, and onboard blockchain companies, initially focusing on Starknet, Aztec, and Arbitrum Stylus ecosystems
                                    </li>
                                    <li>
                                      Drive and close 3-5 strategic deals per month, directly contributing to Walnut’s growth
                                    </li>
                                    <li>
                                      Own the end-to-end sales process: prospecting, product demos, negotiations, and closing
                                    </li>
                                    <li>
                                      Collaborate closely with the CEO on pricing, messaging, positioning, and strategic partnerships
                                    </li>
                                    <li>
                                      Contribute to Walnut’s Product roadmap, helping shape the future growth of the company
                                    </li>
                                    <li>
                                      Attend key web3 events and conferences to represent Walnut
                                    </li>
                                </ul>
                                <h2>You&apos;re a Great Fit If You</h2>
                                <ul className="marker:text-pink-600 list-disc pl-5 space-y-3">
                                    <li>
                                      Have genuine curiosity and enthusiasm for emerging technologies, blockchain or security
                                    </li>
                                    <li>
                                      Enjoy building sales and partnership processes from scratch and having large impact
                                    </li>
                                    <li>
                                      Have a proven track record in sales or business development (technical product sales experience is preferred)
                                    </li>
                                    <li>
                                      Can effectively communicate with technical teams, developers, and engineering leaders
                                    </li>
                                    <li>
                                      Are proactive and entrepreneurial
                                    </li>
                                </ul>
                                <h2>Nice to Have</h2>
                                <ul className="marker:text-pink-600 list-disc pl-5 space-y-3">
                                    <li>
                                      Experience at an early-stage startup or as a founder
                                    </li>
                                    <li>
                                      Familiarity with blockchain, smart contracts, cybersecurity, or related fields
                                    </li>
                                    <li>
                                      Existing network within blockchain ecosystems
                                    </li>
                                </ul>
                                <h2>What We Offer</h2>
                                <ul className="marker:text-pink-600 list-disc pl-5 space-y-3">
                                    <li>
                                      Highly competitive compensation
                                    </li>
                                    <li>
                                      Fully remote, flexible, and supportive culture
                                    </li>
                                    <li>
                                     Unlimited vacation policy and semi-annual team retreats (1-2 weeks around Europe, typically mountains or seaside)
                                    </li>
                                    <li>
                                      Opportunity to define your role, significantly influence Walnut&apos;s growth, and work directly with founders
                                    </li>
                                </ul>

                                <h2>How to Apply</h2>
                                <p>
                                  Send us a short intro about yourself and why this role excites you to <Link href="mailto:hi@walnut.dev"> hi (at) walnut (dot) dev</Link>. We&apos;ll follow up quickly!
                                </p>
                                
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>
		<Footer />
	</>
}
