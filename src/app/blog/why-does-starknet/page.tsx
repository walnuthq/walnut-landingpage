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
                                <p className="lead">In this article, we&apos;ll explore the current challenges Starknet developers face in debugging.</p>

                                <p>For any Starknet developer, errors are common occurrences. Broadly classified into <strong>Syntax Errors</strong>, <strong>Runtime Errors</strong>, and <strong>Logic Errors</strong>, each presents its unique challenges. While Syntax errors are easily detected by the compiler, the others pose more significant challenges.</p>

                                <p>
                                    Runtime Errors and Logic Errors spring into action after the contract has been deployed. While Runtime Errors result in reverted transactions, Logic Errors might hide in the shadows where transactions seem to have completed but produce unexpected output. Debugging such errors becomes a treasure hunt as the error messages are not obvious and are missing runtime context to aid debugging.</p>
                                <p>For instance, an exception like the following might emerge from a transaction.</p>
                                <pre>
                                    <code>
                                        Error in the called contract (0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7):<br />
                                        Error at pc=0:9:<br /><br />
                                        Got an exception while executing a hint: Assertion failed, 0 % 0x800000000000011000000000000000000000000000000000000000000000001 is equal to 0
                                    </code>
                                </pre>
                                <figcaption className='mt-2 text-gray-500'>Runtime Error taken from <a href="https://starkscan.co/tx/0x02ff0a85f980a07e43a21fc4c36ac7433024d6147cb3e6df7361f8119efb3c31">this transaction</a></figcaption>
                                <p>The exception reveals the contract address where the error occurred, accompanied by an error message stating <em>Assertion failed</em>. Developers are still left scratching their heads in search of potential solutions to resolve this issue.</p>
                                <p>Let&apos;s now explore the current state of tools available to Starknet developers to resolve such errors.</p>
                                <ul>
                                    <li><strong>Logging</strong>: Logging is a widely used debugging method, is convenient but limited to the local development environment and unavailable after contract deployment.</li>

                                    <li><strong>Call Traces</strong>: Starknet generates Call traces for a successful transaction, detailing function calls made to an external contract with inputs and outputs of each function call. Example: <a href="https://app.walnut.dev/tx/SN_MAIN/0x06dfec7ebdb87e06383b4967ca0206516680900baff5798a1cedd22ea75f1372">Call Traces</a> for a swap transaction.<br />However, these traces lack execution details within functions, making it challenging to reconstruct execution states and locate errors. Additionally, the absence of Call Traces for reverted transactions hinders developers in gaining insights into the execution flow and pinpointing errors.</li>
                                    {/* <ul>
                                        <li>
                                            They do not contain details of execution within the functions.<br />These Call traces lack information about how a variable changes value within the function or logs of any function call to private functions. The Call traces are limited in information and reconstructing the execution states to locate the error can be a daunting task.
                                        </li>
                                        <li>
                                            Call Traces are currently only available for successful transactions. There is some work needed in the <a href="https://github.com/starkware-libs/blockifier/tree/349fef9329e9f679e252bf6ccec5743cbad9b802">blockifier repo</a> to extend these traces for reverted transactions. We at Walnut have forked blockifier to generate these traces for reverted transactions and are working with the Blockifier team to make it available to everyone. Call Traces for failed transactions are available to Walnut users in closed beta today.
                                        </li>
                                    </ul> */}
                                    <li><strong>Debugger</strong>: Starknet currently lacks a debugger that would allow developers to inspect variables and states during transaction execution. A debugger would make it easier for developers to reconstruct execution state without any modifications to the code and pinpoint errors effectively.</li>
                                </ul>
                                <p>To sum up, debugging Starknet contracts presents a formidable task due to the complexity of errors and the limitations of existing tools. The discussed issues with Call Traces and the absence of a debugger highlight the need for dedicated solutions. At Walnut, we are dedicated to enhancing the debugging experience for every Starknet developer by extending Call Traces for reverted transactions and developing a debugger.</p>



                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div >
        <Footer />
    </>
}
