import { Footer } from "@/components/Footer";
import BlogHeader from "@/app/blog/components/BlogHeader";

import Image from "next/image";

import cairovmcodes_playground from "@/images/blog/cairovm-codes playground.png";
import header_cairovm from "@/images/blog/Cairo Playground.jpg";
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
                  cairovm.codes – Run, Debug, and Learn Cairo Programming
                </h1>
                <div className="text-sm leading-6">
                  <dl>
                    <dt className="sr-only">Date</dt>
                    <dd className="absolute top-0 inset-x-0 text-slate-700">
                      Monday, September 16, 2024
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
                  <Image
                    src={header_cairovm}
                    alt="cairovm.codes is a web application for running and debugging Cairo programs"
                    width={1300}
                    height={742}
                  />
                  <h2 className="lead">Introducing cairovm.codes</h2>
                  <p>
                    <a href="https://cairovm.codes/">cairovm.codes</a> is a
                    powerful web application that serves both educational and
                    debugging purposes, helping users run and explore Cairo
                    programs while gaining a deeper understanding of their inner
                    workings. It is especially useful for those learning Cairo,
                    but it also functions as a capable debugger. The tool
                    presents detailed information about the CairoVM execution
                    and memory, while providing mappings from the execution
                    trace to CASM, Sierra, and Cairo.
                  </p>

                  <p className="p-6 bg-gray-50/90">
                    💡 cairovm.codes has now been officially recognized by
                    Starkware. The Cairo team has integrated cairovm.codes into
                    the official Cairo website, which you can visit at{" "}
                    <a href="https://www.cairo-lang.org/cairovm/">
                      cairo-lang.org/cairovm.
                    </a>
                  </p>

                  <h2>How cairovm.codes Works: A Step-by-Step Guide</h2>

                  <p>
                    The app is divided into two main sections, providing a
                    seamless way to debug Cairo programs using cairovm.codes:
                  </p>
                  <ul>
                    <li>
                      <strong>Code Editor (Left Panel):</strong> Here, you can
                      write arbitrary Cairo code. This allows users to quickly
                      test their programs, making cairovm.codes a valuable tool
                      for both learning and debugging Cairo programs.
                    </li>
                    <li>
                      <strong>Execution Details (Right Panel):</strong> After
                      running the code, this panel displays detailed information
                      about the CairoVM execution, enabling users to explore the
                      program counter (PC), allocation pointer (AP), frame
                      pointer (FP), registers, as well as the memory and
                      function call stack.
                    </li>
                  </ul>
                  <figure>
                    <Image
                      src={cairovmcodes_playground}
                      alt="cairovm.codes is a web application for running and debugging Cairo programs"
                      width={1300}
                      height={742}
                    />
                    <figcaption>
                      cairovm.codes is a web application for running and
                      debugging Cairo programs
                    </figcaption>
                  </figure>

                  <p>
                    The app also offers a three-column mode, for users
                    interested in seeing Sierra alongside Cairo and CASM. By
                    using the “Next” and “Previous” buttons, developers can
                    rerun the program execution, analyzing how registers,
                    memory, or the function call stack change over time. With
                    each step, cairovm.codes highlights the corresponding Cairo,
                    CASM, and Sierra code, visually showing which line of code
                    is being executed.
                  </p>
                  <p>
                    For those new to Cairo and Sierra, this feature makes
                    cairovm.codes an excellent{" "}
                    <b>educational tool for learning Cairo programming.</b>
                  </p>

                  <h2>Learn More: Video by Starkware</h2>
                  <p>
                    If you’re wondering{" "}
                    <b>how to debug Cairo programs using cairovm.codes</b>,
                    Starkience has created an awesome 4-minute video that
                    showcases all the essential features and use cases. You can
                    view it{" "}
                    <a href="https://x.com/CairoLang/status/1833080071738782001">
                      here
                    </a>
                    . The video provides a comprehensive{" "}
                    <b>step-by-step guide to using cairovm.codes</b>, allowing
                    you to get started with the tool right away.
                  </p>

                  <h2>What’s Next for cairovm.codes?</h2>
                  <p>
                    We have several exciting features in development for
                    cairovm.codes, designed to expand the functionality and
                    flexibility of the platform:
                  </p>
                  <ul>
                    <li>
                      <strong>Support for Contracts:</strong> We’re working on
                      an update to support Cairo Contracts, allowing users to
                      move beyond simple Cairo programs and work on more complex
                      projects.
                    </li>
                    <li>
                      <strong>Gas Breakdown:</strong> This feature will provide
                      a visual breakdown of gas consumption at each level of
                      execution—CairoVM, CASM, Sierra, and Cairo—helping
                      developers optimize their code.
                    </li>
                    <li>
                      <strong>In-browser, Local Mode:</strong> We’re considering
                      a mode that allows the app to run fully on the client
                      side, without any dependency on Walnut’s APIs, giving
                      developers more flexibility in how they use the tool.
                    </li>
                  </ul>

                  <p>
                    Let us know which of these features excites you the most, or
                    what additional improvements you’d like to see on
                    cairovm.codes. Whether you’re looking to dive deeper into
                    Cairo programming or just need a reliable way to debug your
                    code, cairovm.codes is here to help!
                  </p>

                  <p>With 🖤 by Walnut</p>
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
