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
                                        <strong>Be early to Starknet and become an OG.</strong> After announcing Walnut, we received strong interest from top Starknet companies like Argent, Briq or StarknetID. Building Walnut presents an opportunity to collaborate with the top devs on Starknet, solve their problems, build friendships, and get deep into the ecosystem.
                                    </li>
                                    <li>
                                        <strong>Live and work wherever you choose.</strong> You will work in a fully remote and async setup. The whole team consists only of developers, and we are building a developer-friendly culture: very few meetings, logical & async conversations, transparency, and good documentation, with a focus on building state-of-the-art products. We are huge fans of 37signals and their books.
                                    </li>
                                    <li>
                                        <strong>Build a product from 0 to 1.</strong> We closed a partnership with Starknet, are funded, and have strong user interest for the product. We now just need to build it.
                                    </li>
                                    <li>
                                        <strong>Have an impact.</strong> You will become the third person on our team, which speaks for itself. You can influence pretty much anything you choose — the roadmap, the tech stack, the way we do agile. If you don’t like anything, all the stakeholders are there, on every standup, ready to listen.
                                    </li>
                                </ul>


                                <h2>Who are we looking for</h2>
                                <ul className="marker:text-pink-600 list-disc pl-5 space-y-3">
                                    <li>
                                        Excellent programming skills, solid experience with Rust.
                                    </li>
                                    <li>
                                        Great understanding of Blockchains and distributed systems, i.e., Ethereum and its rollups, Polkadot, Cosmos, etc.
                                    </li>
                                    <li>
                                        Full-stack / Backend engineer with at least 5 years of experience.
                                    </li>
                                    <li>
                                        Great communication skills.
                                    </li>
                                    <li>
                                        Self-organized person.
                                    </li>
                                    <li>
                                        Experience with working in a fully remote, async culture.
                                    </li>
                                    <li>
                                        We are looking for people in Europe so that it&apos;s easier for us to occasionally meet in person. We plan to host two offsites per year in nice places around Europe.
                                    </li>
                                </ul>

                                <h2>About Walnut</h2>
                                <p>
                                    We are a team of (currently) two developers building Walnut: a web-based debugger for Starknet transactions. We mostly deal with Rust on the backend and React / NextJS on the frontend. Our work also touches the Cairo Compiler and Cairo VM, which we need to tweak to generate the debug information required by the debugger.
                                </p>
                                <p>
                                    From a high level, the Walnut architecture involves running a custom node with a forked and enhanced Cairo VM and Compiler, capable of generating the necessary debug information. We have a front-end app, https://app.walnut.dev/, where users can paste transactions. The front end then sends a query to our backend, which reruns the transaction using our modified node to generate the necessary debug info. Finally, the server returns the debug info back to the client to present the debugger UI.
                                </p>
                                <p>
                                    We are also behind <Link href="https://cairovm.codes/">cairovm.codes</Link>, a web-based playground for learning and debugging Cairo programs and exploring the Cairo VM execution trace. The app has been recognized by Starkware and is in the process of being integrated into the official documentation of Starknet.
                                </p>
                                <p>
                                    We are VC-backed and have a healthy runway. We are not just another “crazy-excited”, “move-fast-and-change-direction-every-day”, “VC-backed-and-soon-to-die” startup. We have been around for a while and have experienced our fair share of successes and failures. We are well-capitalized and committed for the long term.
                                </p>

                                <h2>What you will work on</h2>
                                <p>
                                    You will spend approximately 100% of your time building Walnut. The only meetings we conduct are standups and bi-weekly retrospectives. Among other responsibilities, you will:
                                </p>
                                <ul className="marker:text-pink-600 list-disc pl-5 space-y-3">
                                    <li>
                                        Work on the Node infrastructure to ensure its stability.
                                    </li>
                                    <li>
                                        Work on the Backend code (written in Rust) that simulates (reruns) transactions and generates debug information.
                                    </li>
                                    <li>
                                        Work on the frontend code (React + Next) of the debugger. Note: UI skills are not expected here; we have that covered. :)
                                    </li>
                                </ul>

                                <p>
                                In addition, you will also be involved in regular experiments to learn new things. The next one we are planning is a two-week exploration project to ideate and build a debugger MVP for the app-chain future, where there are thousands of chains. This future poses a problem to our current architecture, as we need to rerun every transaction to get the debug data. In the experiment, we aim to explore some solutions to this problem.
                                </p>

                                <h2>Summary</h2>
                                <p>This opportunity is tailored for highly skilled, experienced developers who are passionate about blockchain technology and looking for a chance to make a significant impact in a cutting-edge, supportive, and flexible work environment.</p>
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
