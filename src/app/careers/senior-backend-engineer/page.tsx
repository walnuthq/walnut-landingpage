import { Footer } from '@/components/Footer'
import BlogHeader from '@/app/blog/components/BlogHeader';
import Link from 'next/link';

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
                            Senior Backend Engineer
                                🔗
                            </h1>
                            <div className="mt-6">
                                <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                                    <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                                        <div className="text-sm leading-4">
                                            <div className="text-slate-900 flex gap-x-3 items-center text-base">
                                                Location: Remote, Europe
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
                                <p className="lead">Join us in our mission to build tools for blockchain developers, with a special focus on Starknet. We&apos;re in the early stages, presenting an opportunity for you to have a massive impact on both our product and the company&apos;s culture. Our partnership with Starknet places us in an advantageous position to succeed.</p>

                                <h2>Why you should care</h2>
                                
                                <ul className="marker:text-pink-600 list-disc pl-5 space-y-3">
                                    <li>
                                        <strong>Build a product people will actually use and love.</strong> After announcing Walnut at the end of 2023 during StarkNet Istanbul (and <Link href="https://x.com/Starknet/status/1724865566303821948?s=20">winning the hackathon 🙌</Link>), we received strong interest from top StarkNet companies such as <Link href="https://argent.xyz/">Argent</Link>, <Link href="https://briq.construction/">Briq</Link>, and <Link href="https://starknet.id/">StarknetID</Link>. They all said they &quot;definitely need a transaction debugger for their day-to-day&quot; and are waiting for V1 to go live.
                                    </li>
                                    <li>
                                        <strong>Live and work wherever you choose.</strong> The entire team comprises only developers, and we are fostering a remote-first, developer-friendly culture. This involves having very few meetings and numerous transparent, well-documented asynchronous conversations. We are huge fans of <Link href="https://37signals.com/">37signals</Link> and their books.
                                    </li>
                                    <li>
                                        <strong>Increase your odds of success.</strong> Walnut is well-capitalized and officially supported by the StarkNet Foundation, which recognizes the need for a transaction debugger. Our runway is healthy, and we have strong partners behind our backs.
                                    </li>
                                    <li>
                                        <strong>Build it from the ground up.</strong> The core tech stack and infrastructure are being developed, and you can be part of the design process.
                                    </li>
                                    <li>
                                        <strong>Create impact.</strong> You will become the third person on our team, which allows you to influence everything from the roadmap and the tech stack to the way we implement agile. If you don&apos;t like anything, the entire company is there at every standup, every day.
                                    </li>
                                    <li>
                                        <strong>Become our CTO.</strong> It&apos;s a role we will need to fill soon. If things go very well, it can be yours.
                                    </li>
                                </ul>


                                <h2>Who are we looking for</h2>
                                <ul className="marker:text-pink-600 list-disc pl-5 space-y-3">
                                    <li>
                                        At least 5 years of experience as a Full-stack / Backend engineer.
                                    </li>
                                    <li>
                                        Excellent programming skills. Experience with Rust is a bonus.
                                    </li>
                                    <li>
                                        Great understanding of blockchains and distributed systems, such as Ethereum and its rollups, Polkadot, Cosmos, etc.
                                    </li>
                                    <li>
                                    Great communication skills and experience working in a fully remote, asynchronous culture.
                                    </li>
                                    <li>
                                        This role is available only to candidates in Europe to make it easier for us to occasionally meet in person. We plan to host two offsites per year in beautiful places around Europe.
                                    </li>
                                </ul>

                                <h2>About Walnut</h2>
                                <p>
                                    We are a team of two developers seeking to hire two more backend developers to join our ranks. Expect a team of four builders—an ideal group to create a new product, ship quickly, and iterate effectively.
                                </p>
                                <p>
                                    From a high level, the Walnut architecture involves a Backend that is capable of forking the Starknet blockchain and rerunning (simulating) transactions with a customized Cairo VM and Compiler in order to generate debug information for the transaction runtime. It communicates with a Front-End web app, <Link href="https://app.walnut.dev">https://app.walnut.dev</Link>, where users can paste transaction hashes and get the ability to debug those transactions.
                                </p>
                                <p>
                                    We are also building <Link href="https://cairovm.codes/">cairovm.codes</Link>, a web-based playground for learning and debugging Cairo programs and exploring the Cairo VM execution trace. The app has been recognized by Starkware and is in the process of being integrated into the official documentation of Starknet.
                                </p>
                                <p>
                                    We are VC-backed and have a healthy runway. We are not just another &quot;crazy-excited&quot;, &quot;move-fast-and-change-direction-every-day&quot;, &quot;VC-backed-and-soon-to-die&quot; startup. We have been around for a while and have experienced our fair share of successes and failures.
                                </p>

                                <h2>What you will work on</h2>
                                <p>
                                    You will spend approximately 100% of your time building Walnut. The only regular meetings we conduct are standups and short bi-weekly retrospectives. You will mainly:
                                </p>
                                <ul className="marker:text-pink-600 list-disc pl-5 space-y-3">
                                    <li>
                                        work on the API infrastructure to ensure its stability.
                                    </li>
                                    <li>
                                        work on the Backend code (written in Rust) that simulates (reruns) transactions and generates debug information.
                                    </li>
                                    <li>
                                        work on the frontend code (React + Next) of the debugger. Note: UI skills are not expected in this role as we have that covered. 💅
                                    </li>
                                </ul>

                                <p>
                                    In addition, you will also be involved in regular experiments to learn new things. The next experiment we are planning is a two-week exploration project to ideate and build an MVP for a debugger that would support thousands of chains. Our current architecture will struggle with large numbers of chains due to the requirement to rerun transactions for each one. In the experiment, we aim to explore multiple solutions to solve this problem.
                                </p>

                                <h2>Summary</h2>
                                <p>
                                    This opportunity is tailored for highly skilled, experienced developers who are passionate about blockchain technology and looking for a chance to build a lasting product that will solve many people&apos;s needs.
                                </p>
                                <Link href="mailto:hi@walnut.dev">Send us a CV if you are interested.</Link>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>
		<Footer />
	</>
}
