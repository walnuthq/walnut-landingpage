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
                                        Thursday, December 28, 2023
                                    </dd>
                                </dl>
                            </div>
                            <div className="mt-6">
                                <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                                    <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                                        {/* <img src="/_next/static/media/adamwathan.8adb7a70.jpg" alt="" className="mr-3 w-9 h-9 rounded-full bg-slate-50" decoding="async" /> */}
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
                                <p className="lead">In this article we will discuss the current problems with debugging that are faced by developers in Starknet, and how we can address them.</p>

                                <p>For any Starknet developer, errors would be nothing unfamiliar. Broadly classified into <strong>Syntax Errors</strong>, <strong>Runtime Errors</strong>, and <strong>Logic Errors</strong>, they strike at different stages in the development lifecycle. Syntax errors are typically low-hanging fruits, easily caught by the compiler. However, the other error types muddy the waters.</p>

                                <p>
                                    Runtime Errors and Logic Errors spring into action after the contract has been deployed. While Runtime Errors result in reverted transactions, Logic Errors might hide in the shadows where transactions seem to have completed but produce unexpected output. Debugging such errors often turns into a full-blown treasure hunt as the error messages are not obvious and are missing runtime context to aid debugging.</p>
                                <p>For instance, an exception like the following might emerge from a transaction.</p>
                                <pre>
                                    <code>
                                        Error in the called contract (0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7):<br />
                                        Error at pc=0:9:<br /><br />
                                        Got an exception while executing a hint: Assertion failed, 0 % 0x800000000000011000000000000000000000000000000000000000000000001 is equal to 0
                                    </code>
                                </pre>
                                <figcaption className='mt-2 text-gray-500'>Exception taken from transaction <a href="https://starkscan.co/tx/0x02ff0a85f980a07e43a21fc4c36ac7433024d6147cb3e6df7361f8119efb3c31">this transaction</a></figcaption>
                                <p>Despite some information about the contract where it occurred, developers could be left scratching their heads in search of potential solutions to resolve this issue.</p>
                                <p>Now let’s look at the current state of tools that developers use for debugging:</p>
                                <ul>
                                    <li><strong>Logging</strong> The most popular way to debug in any language is using logging or print statements. While very easy to use for resolving such errors, it is restricted to the confines of the local development environment. They aren’t available for debugging after the contract deployment. In Starknet, support for logging during development is also limited to the <a href="https://foundry-rs.github.io/starknet-foundry/testing/debugging.html">Starknet Foundry</a> today. If developers don’t use Starknet Foundry, they’re left high and dry.</li>

                                    <li><strong>Call Traces</strong> Starknet generates function call traces for a transaction. It contains a log of all function calls made to an external contract, these traces contain the input and output of the function call. <br />There are two problems with Call Traces in Starknet</li>
                                    <ul>
                                        <li>
                                            It does not contain details of execution within the functions.<br />Example these traces do not contain information about how a variable changed value within the function or logs of any function call to private functions. Given the traces are limited in the information it allows experienced developers to painstakingly reconstruct the execution states to locate the error. It can, however, be a daunting task.
                                        </li>
                                        <li>
                                            Traces are only available for successful transactions today. There is some work needed in the <a href="https://github.com/starkware-libs/blockifier/tree/349fef9329e9f679e252bf6ccec5743cbad9b802">blockifier repo</a> to extend these traces for reverted transactions. We at Walnut have forked blockifier to generate these traces for reverted transactions and are working with the Blockifier team to make it available to everyone. This is available to Walnut users in closed beta today.
                                        </li>
                                    </ul>
                                    <li><strong>Debugger</strong> is missing from Starknet that helps debug a transaction without any modifications to the code (logging) and shows the entire details of execution like changes in the values of the variable and starknet state as it goes through each statement of the contract. This will allow developers to introspect the variables and state at the point where the transaction reverted or help debug any logic errors with the code.</li>
                                </ul>
                                <p>We at Walnut are firmly set on the path to improve the debugging experience for every Starknet developer by building a debugger that works with local and remote (on-chain) transactions alike.</p>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div >
        <Footer />
    </>
}
