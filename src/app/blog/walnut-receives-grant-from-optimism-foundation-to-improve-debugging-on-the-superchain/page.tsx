import { Footer } from "@/components/Footer";
import BlogHeader from "@/app/blog/components/BlogHeader";

import Image from "next/image";

import author from "@/images/blog/J6fWCiVz_400x400.jpg";

export default function Blog() {
  return (
    <>
      <BlogHeader />
      <div>
        <div className="max-w-8xl mx-auto">
          <div className="flex px-4 pt-8 pb-10 lg:px-8">
            <a
              className="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900"
              href="/blog"
            >
              <svg
                viewBox="0 -9 3 24"
                className="overflow-visible mr-3 text-slate-400 w-auto h-6 group-hover:text-slate-600"
              >
                <path
                  d="M3 0L0 3L3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
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
                  Walnut Receives Grant from Optimism Foundation to Improve Debugging on the Superchain
                </h1>
                <div className="text-sm leading-6">
                  <dl>
                    <dt className="sr-only">Date</dt>
                    <dd className="absolute top-0 inset-x-0 text-slate-700">
                      Friday, November 8, 2024
                    </dd>
                  </dl>
                </div>
                <div className="mt-6">
                  <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
                    <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
                      <Image
                        src={author}
                        alt=""
                        className="mr-3 w-9 h-9 rounded-full bg-slate-50"
                        decoding="async"
                      />
                      <div className="text-sm leading-4">
                        <div className="text-slate-900">Roman Mazur</div>
                        <div className="mt-1">
                          <a
                            target="_blank"
                            href="https://twitter.com/romanmazur"
                            className="text-sky-500 hover:text-sky-600"
                          >
                            @romanmazur
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 mb-24 prose">
                  <p className="lead">
                  We&apos;re excited to announce that Walnut has received a grant from the Optimism Foundation to develop Walnut Lite, a fully open-source solution for transaction simulations and debugging on the OP&nbsp;Stack and the Superchain. Walnut Lite is designed to give Solidty developers a local, lightweight and customisable debugging experience for their Smart Contract Applications.
                  </p>
                  <h2>The Problem</h2>
                  <p>
                    Building smart contract applications requires 
                    tools that help developers debug and simulate transactions. 
                    Currently, all available solutions are commercial, creating 
                    high costs and barriers for developers.
                  </p>

                  <p>
                    This challenge is even greater for developers working 
                    on smaller or niche appchains, as these often aren’t 
                    supported by commercial tools at all. 
                    This leaves developers on unsupported appchains 
                    without any options for testing and debugging.
                  </p>
                  <p>
                    <strong>Walnut Lite</strong> will solve this by offering a free, open-source 
                    tool that works with all appchains on the Superchain. Since 
                    it doesn’t rely on any centralized server and runs fully locally, 
                    developers can simply connect Walnut Lite to a custom RPC and start 
                    simulating and debugging their transactions. 
                    This lowers the barrier to development on the Superchain, 
                    making essential tools available to both new and experienced developers.
                  </p>
                  <h2>The Opportunity</h2>
                  <p>
                    Walnut Lite is designed to support Solidity developers building 
                    in the emerging Ethereum appchain ecosystem, starting with the Superchain.
                  </p>
                  <p>
                    As a fully open-source application, Walnut Lite is customizable 
                    and can run locally in any environment. By connecting Walnut Lite 
                    to a custom RPC node (initially supporting Superchain nodes), developers 
                    can simulate and debug transactions without relying on centralized services.
                  </p>
                  <p>
                    Walnut Lite offers:
                  </p>
                  <ul>
                    <li>
                      <strong>Free, Local Simulation and Debugging:</strong> Walnut Lite operates entirely 
                      locally, with no subscription fees, making it free to use.
                    </li>
                    <li>
                      <strong>Customizability and Extensibility:</strong> As an open-source tool, Walnut Lite 
                      allows developers to fork and customize it for their specific needs. They can also build 
                      additional tools on top of Walnut’s debugging engine or integrate it into existing applications, 
                      like blockchain explorers or IDE extensions.
                    </li>
                    <li>
                      <strong>Compatibility with Any Rollup or Appchain:</strong> Developers can connect Walnut Lite 
                      to any RPC (starting with Superchain nodes), enabling it to work with any appchain, including 
                      local nodes. This is a game-changer for developers working on smaller appchains, who previously 
                      had no dedicated debugging or simulation solutions.
                    </li>
                  </ul>
                  <p>
                    Walnut Lite is set to become an essential asset for developers seeking a more efficient development 
                    experience on the Superchain. It aligns with our mission to make blockchain development faster and 
                    more secure.
                  </p>
                  <h2>Looking Ahead</h2>
                  <p>
                    We’re excited to bring Walnut Lite to the Superchain community and look forward to expanding its 
                    impact across the broader Ethereum ecosystem in the future. Join us as we reshape the landscape of 
                    smart contract development with tools designed by developers, for developers.
                  </p>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
