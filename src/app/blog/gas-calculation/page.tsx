import { Button } from "../../../components/button";
import { Container } from "../../../components/container";
import { Heading, SectionHeading, Subheading } from "../../../components/text";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import marijamijailovic from "@/images/blog/marijamijailovic.png";
import Image from "next/image";
import click_blue_gas from "@/images/blog/click-blue-gas.png";
import flamechart from "@/images/blog/flamechart.png";
import __validate__ from "@/images/blog/deep-dive-into-starknet-tx-call-trace/__validate__.png";
import __execute__ from "@/images/blog/deep-dive-into-starknet-tx-call-trace/__execute__.png";

import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from '@/app/utils/generate-metadata-service';
import { Footer } from "@/components/footer";
import { GetStarted } from "@/components/get-started";
import MainHeader from "@/components/main-header";

const title = "Analyse Gas Usage in Starknet Transactions with Walnut Flamegraphs";
const description = "If you've ever looked at a Starknet transaction and wondered where all the gas goes — we’ve got the answer.";
export const metadata: Metadata = generateMetadata(title, description, 'https://www.walnut.network/blog/gas-calculation');
const asciiTree = `L2 Gas
└── Computation resources
    ├── VM cost
    └── Sierra cost
        ├── __validate__
        └── __execute__
            ├── test_call_contract
            │   └── test_signature_verification_secp256r1
            └── test_poseidon_hades_permutation
└── Starknet resources
    ├── Archival resources
    ├── Messages resources
    └── State resources`
;

export default function Blog() {
  return (
    <main className="overflow-hidden">
      <MainHeader/>
      <Container>
        <SectionHeading className="mt-32">Friday, June 27, 2025</SectionHeading>
        <Heading as="h1" className="mt-2">
          Analyse Gas Usage in Starknet Transactions with Walnut Flamegraphs
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
            <Link
              href={"https://x.com/marija_mi"}
              target="_blank"
              className="flex items-center gap-3"
            >
              <Image
                alt=""
                src={marijamijailovic}
                className="aspect-square size-6 rounded-full object-cover"
              />
              <div className="text-sm/5 text-gray-700 hover:underline">
                @marijamijailovic
              </div>
            </Link>
          </div>
          <div className="text-gray-700">
            <div className="max-w-2xl xl:mx-auto">
              <div>
                <div className="mx-auto">
                  <main>
                    <article className="relative">
                      <div className="mt-12 mb-24 prose">
                        <p className="lead">
                        Ever looked at a Starknet transaction and wondered why it cost what it did? The answer lies in how gas is calculated across L2 execution, L1 data and L1 gas usage. In this post, we break down the L2 gas component — and introduce a new Flamegraph tool in Walnut that lets you visualize exactly where your transaction spent gas, down to each contract and Cairo function call.
                        </p>
                        <p>Every Starknet transaction incurs fees that come from three different gas components:</p>
                        <ul>
                          <li>
                            <strong>L2 gas</strong> – measures computation, code complexity and data usage on Starknet (L2).
                          </li>
                          <li>
                            <strong>L1 data gas</strong> – covers the cost of posting the transaction’s state diff 
                            (e.g., storage changes or class declarations) to L1 for data availability.
                          </li>
                          <li>
                            <strong>L1 gas fee </strong> – applies when sending messages from L2 to L1, or when calldata (instead of blobs) is used for data availability.
                          </li>
                        </ul>
                        <p>
                          The transaction&apos;s <strong>actual fee (the fee users see in their wallet)</strong> is calculated from these three components. 
                          It is computed as a weighted sum of the components multiplied by their respective gas prices. Gas prices 
                          <strong> (L1 gas price, L1 data gas price, and L2 gas price)</strong> are determined by the sequencer at block production time. 
                          These prices reflect the current cost of using L1 and L2 resources and are embedded in the block context. 
                          For more details, see the <a href="https://docs.starknet.io/architecture/fees/#fee_formula" target="_blank">
                          Starknet fee mechanism documentation.</a>
                        </p>
                        <p>In this post we will break down how L2 gas is calculated on Starknet, using a real transaction to illustrate how 
                          execution and data resources contribute to cost. We also introduce a brand new Flamegraph visualisation tool in Walnut 
                          that helps Cairo developers analyze Starknet transaction costs on a granular level – making it easy to see exactly where 
                          gas is spent.
                        </p>
                        <h2>
                          Analysing L2 gas cost of a sample transaction using Walnut Call Trace with Gas Information
                        </h2>
                        <p>
                          We’ll use the following transaction {' '}
                          <span className="font-mono p-1 bg-GREY rounded-sm text-red-600">0x30e60f2bf9dd5ae90a642fcca957883a8f517549c0f69fd9c0decaa0b7ca54b </span>
                          as our running example, you can check it at {' '}
                          <a href="https://app.walnut.dev/transactions?chainId=SN_SEPOLIA&txHash=0x30e60f2bf9dd5ae90a642fcca957883a8f517549c0f69fd9c0decaa0b7ca54b" target="_blank">walnut.dev</a>
                        </p>
                        <p>The prerequisites for getting per-call gas breakdown on Cairo contracts on Walnut are:</p>
                        <ul>
                          <li>
                            Transaction Version 3
                          </li>
                          <li>
                            Sierra Contract Version: ≥ 1.7.0
                          </li>
                        </ul>
                        <figure>
                          <div className={`lg:bg-GREY lg:p-2`}>
                            <div 
                              className={`relative overflow-hidden [&+*]:mt-8 lg:bg-[url('/changelog-bg.svg')] bg-cover bg-center no-repeat lg:p-4`}
                            >
                              <Image src={click_blue_gas} alt="" className='lg:shadow-2xl rounded-3xl w-full h-auto'/>
                            </div>
                          </div>
                          <figcaption>
                          🔎 Tip: Click each &quot;blue gas&quot; chip on the right to get quick access to a specific level of the Flamegraph.
                          </figcaption>
                        </figure>
                        <p>
                          The image above shows a full Call Trace on Walnut with enhanced Gas Information. It involves a few contract calls, each with its own gas cost visualised in the blue chip on the right:
                        </p>
                        <ul>
                          <li>
                            <span className="text-BLUE font-mono">AccountContract</span>.<span className="text-red-600 p-1 bg-GREY rounded-sm font-mono">__validate__</span>: 86,635 L2 Gas
                          </li>
                          <li>
                            <span className="text-BLUE font-mono">AccountContract</span>.<span className="text-red-600 font-mono p-1 bg-GREY rounded-sm">__execute__</span>: 27,435,820 L2 Gas
                          </li>
                          <li className="break-words">
                            <span className="text-BLUE font-mono">0x7b14d2b859efbbc97d68ca769d6e9b6a1c1fd9629d213e8555335448dc759bf</span>.
                            <span className="text-red-600 font-mono p-1 bg-GREY rounded-sm">test_call_contract</span>: 27,710,801 L2 Gas
                          </li>
                          <li className="break-words">
                            <span className="text-BLUE font-mono">0x69b0b8db5469b82390505d02cda4ca08bebf50ca0d824a88b6756fcd5aaf5e5</span>.
                            <span className="text-red-600 font-mono p-1 bg-GREY rounded-sm">test_signature_verification_secp256r1</span>: 27,355,850 L2 Gas
                          </li>
                          <li className="break-words">
                            <span className="text-BLUE font-mono">0x7b14d2b859efbbc97d68ca769d6e9b6a1c1fd9629d213e8555335448dc759bf</span>.
                            <span className="text-red-600 font-mono p-1 bg-GREY rounded-sm">test_poseidon_hades_permutation</span>: 6,131 L2 Gas
                          </li>
                        </ul>
                        <p>
                        This detailed breakdown of gas usage helps you understand, on a granular level, the gas cost per contract and function calls in your Starknet transactions.
                        </p>

                        <h2>Introducing Flamecharts for Cairo Transactions</h2>
                        <p>
                          To provide a more visual representation of where the majority of gas is spent, we are introducing Flamecharts for Cairo transactions.
                          They are a great way to understand the gas usage of a transaction and to identify the most expensive parts of the transaction.
                        </p>
                        <figure>
                          <div className={`lg:bg-GREY lg:p-2`}>
                            <div 
                              className={`relative overflow-hidden [&+*]:mt-8 lg:bg-[url('/changelog-bg.svg')] bg-cover bg-center no-repeat lg:p-4`}
                            >
                              <Image src={flamechart} alt="" className='lg:shadow-2xl rounded-3xl w-full h-auto'/>
                            </div>
                          </div>
                          <figcaption>
                            Flamechart for our transaction clearly reveals that the majority of L2 gas is spent on <code>test_signature_verification_secp256r1</code> function call.
                          </figcaption>
                        </figure>
                        <p>
                          The image above presents the gas Flamechart for our transaction. 
                          The root frame represents the total L2 Gas of the transaction and it is then divided into two main parts:
                        </p>
                        <ul>
                          <li>
                            <span className="font-bold">Computation Resources:</span> Actual Cairo (or more specifically Sierra) execution cost. In most cases, this is where the majority of L2 gas goes and where optimization efforts should be focused on. Computation resources are further divided into two sub-components:
                            <ul>
                              <li><span className="font-bold">VM cost:</span> Measures how many VM steps were executed together with the usage of builtins e.g. 
                                <span className="font-mono p-1 bg-GREY rounded-sm text-red-600">range_check</span>, <span className="font-mono p-1 bg-GREY rounded-sm text-red-600">pedersen</span>, <span className="font-mono p-1 bg-GREY rounded-sm text-red-600">poseidon</span>, etc.
                              </li>
                              <li><span className="font-bold">Sierra cost:</span> Tracks the logical structure and complexity of the code. The gas cost is calculated by summing the cost of each Sierra libfunc 
                              (libfuncs are similar to opcodes in the EVM, e.g. <span className="font-mono p-1 bg-GREY rounded-sm text-red-600">u8_add</span> is a libfunc).
                                <ul>
                                  <li>
                                      Each frame under <code>AccountContract.__execute__</code> represents a contract call execution and its children — internal calls made by that contract.
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span className="font-bold">Starknet resources:</span> Starknet system-level overhead:
                          </li>
                          <ul>
                            <li>
                              <span className="font-bold">Archival resources:</span> Cost of storing calldata, signatures, declared class code, and emitted events on L2.
                            </li>
                            <li>
                              <span className="font-bold">Messages resources:</span> Gas usage for processing L1 ↔ L2 messages (e.g., <span className="font-mono p-1 bg-GREY rounded-sm text-red-600">send_message_to_l1</span>).
                            </li>
                            <li>
                              <span className="font-bold">State resources:</span> Cost of storage writes, class hash updates, compiled class updates, and contract deployments. Also, number of new storage keys allocated in the transaction.
                            </li>
                          </ul>
                        </ul>
                        <p>The below structure is a visual representation of all the key resources the Flamegraph shows, helping you trace gas usage from top-level categories to specific calls.</p>
                        <pre className="font-mono text-sm bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto">
                          {asciiTree.split('\n').map((line, idx) => {
                            return (
                              <div key={idx}>
                                <span>{line}</span>
                              </div>
                            );
                          })}
                        </pre>
                        <h2>Cheat Sheet for Optimizing Cairo Transactions Gas Usage</h2>
                        <p>Once you understand which part of the transaction consumes what, you can target your optimizations more effectively. 
                          Here’s a quick cheat sheet on what to watch out for, and how to reduce the impact of each component:</p>
                          <div className="w-full overflow-x-auto">
                            <table className="table-auto w-full border-collapse border border-gray-300">
                              <thead>
                                <tr className="bg-gray-200">
                                  <th className="border border-gray-300 px-4 py-2">Total Gas Component</th>
                                  <th className="border border-gray-300 px-4 py-2">How to Optimize?</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="bg-white">
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">Computation Resources &gt; VM Cost</td>
                                  <td className="border border-gray-300 px-4 py-2">Simplify logic, avoid expensive builtins like <span className="font-mono p-1 bg-GREY rounded-sm text-red-600">ec_op</span>, <span className="font-mono p-1 bg-GREY rounded-sm text-red-600">keccak</span>, <span className="font-mono p-1 bg-GREY rounded-sm text-red-600">ECDSA</span>.</td>
                                </tr>
                                <tr className="bg-gray-100">
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">Computation Resources &gt; Sierra cost</td>
                                  <td className="border border-gray-300 px-4 py-2">Refactor your Cairo code to use cheaper <a href="https://docs.starknet.io/architecture/fees/#sierra_gas" target="_blank">Sierra libfuncs</a>, 
                                  reduce intermediate variables and duplicated operations.</td>
                                </tr>
                                <tr className="bg-white">
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">Starknet Resources &gt; Archival resources</td>
                                  <td className="border border-gray-300 px-4 py-2">Minimize calldata size, use compact types (<span className="font-mono p-1 bg-GREY rounded-sm text-red-600">felt252</span>), reduce event emissions.</td>
                                </tr>
                                <tr className="bg-gray-100">
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">Starknet Resources &gt; Messages resources</td>
                                  <td className="border border-gray-300 px-4 py-2">Avoid unnecessary L1 ↔ L2 messages, batch and pack data before sending.</td>
                                </tr>
                                <tr className="bg-white">
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">Starknet Resources &gt; State resources</td>
                                  <td className="border border-gray-300 px-4 py-2">Reduce <span className="font-mono p-1 bg-GREY rounded-sm text-red-600">storage_write</span>, avoid redundant updates. Reuse existing keys when possible; batch updates to same slot.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="p-6 bg-gray-50/90">
                          💡 Pro tip: Use <a href="http://cairovm.codes" target="_blank">cairovm.codes</a> to quickly check the Sierra code generated for a given Cairo program.
                          </p>
                          <p>In the upcoming posts, we&apos;ll dive deeper into each gas component with hands-on tips for optimizing your contracts more effectively.</p>
                        <h3>Summary</h3>
                        <p>In this post, we focused on one important part of Starknet Transaction Gas Analysis—the L2 gas. We explained different components 
                          of it and presented Walnut’s new feature that helps you analyse how your Starknet Application consumes those 
                          resources on a granular level.
                        </p>
                        <p>Understanding where gas costs come from can help you:</p>
                        <ul>
                          <li>Optimize calldata and minimize unnecessary storage writes.</li>
                          <li>Profile inefficient execution paths.</li>
                          <li>And most importantly: understand <i>why your transaction cost what it did</i>.</li>
                        </ul>
                        <p>With 🖤 by Walnut</p>
                      </div>
                    </article>
                  </main>
                </div>
              </div>
              <div className="mt-10">
                <Button variant="outline" href="/blog">
                  <ChevronLeftIcon className="size-4" />
                  Back to blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <GetStarted/>
      <Footer />
    </main>
  );
}
