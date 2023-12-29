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
                                Why does Starknet need a debugger?
                            </h1>
                            <div className="text-sm leading-6">
                                <dl>
                                    <dt className="sr-only">Date</dt>
                                    <dd className="absolute top-0 inset-x-0 text-slate-700">
                                        Friday, December 29, 2023
                                    </dd>
                                </dl>
                            </div>
                            <div className="mt-6">
                                <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                                    <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                                        <div className="text-sm leading-4">
                                            <div className="text-slate-900">
                                                Kunal Jain
                                            </div>
                                            <div className="mt-1">
                                                <a target='_blank' href="https://twitter.com/kunal_jain" className="text-sky-500 hover:text-sky-600">@kunal_jain</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 mb-24 prose">
                                <p className="lead">In this article, we&apos;ll explore current challenges developers face with debugging transactions on Starknet.</p>

                                <p>For any Starknet developer, errors are common occurrences. Broadly classified into <strong>Syntax Errors</strong>, <strong>Runtime Errors</strong>, and <strong>Logic Errors</strong>, each presents its unique challenges. While Syntax errors are easily detected by the compiler, the others pose more significant challenges.</p>

                                <p>
                                Runtime Errors and Logic Errors spring into action after the contract has been deployed. While Runtime Errors result in reverted transactions, Logic Errors might hide in the shadows where transactions seem to have completed but produce unexpected output.
                                </p>
                                
                                <p>A key challenge in debugging these errors is the lack of clear error messages and missing runtime context to aid debugging. For instance, an exception like the following might emerge from a transaction.</p>
                                <pre>
                                    <code>
                                        Error in the called contract (0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7):<br />
                                        Error at pc=0:9:<br /><br />
                                        Got an exception while executing a hint: Assertion failed, 0 % 0x800000000000011000000000000000000000000000000000000000000000001 is equal to 0
                                    </code>
                                </pre>
                                <figcaption className='mt-2 text-gray-500'>Runtime Error taken from <a href="https://starkscan.co/tx/0x02ff0a85f980a07e43a21fc4c36ac7433024d6147cb3e6df7361f8119efb3c31">this transaction</a>.</figcaption>

                                <p>For the above exception, Starkscan reveals the contract address where the error occurred, accompanied by an error message stating <em>Assertion failed</em>. Such information is very raw and leaves developers  scratching their heads in search of potential solutions to understand this error.</p>

                                <p>Effective debugging tools are essential in blockchain development. Starknet, like other ecosystems, needs tools that assist developers in addressing transaction errors.</p>


                                <p>Currently, Starknet developers rely on methods like logging and Call Traces to debug failed transactions. Logging is helpful but limited to the pre-deployment phase, only available for local development. Call Traces, as implemented on Starknet today, provide details of function calls in successful transactions but lack execution details within functions, making it challenging to reconstruct execution states and locate errors. Additionally, Call Traces aren&apos;t available for failed transactions, making them unusable for Runtime Errors.</p>

                                <p>A significant gap in Starknet&apos;s debugging arsenal is the absence of a dedicated debugger. Such a tool would allow developers to inspect variables and states during transaction execution. A debugger would make it easier for developers to reconstruct execution state without any modifications to the code and pinpoint errors effectively.</p>

                                <p>In summary, Starknet&apos;s debugging challenges stem from the limitations of current tools like Call Traces and the absence of a debugger. At Walnut, we&apos;re committed to improving Starknet&apos;s debugging capabilities by enhancing Call Traces for failed transactions and developing a dedicated debugger for Cairo transactions.</p>



                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div >
        <Footer />
    </>
}
