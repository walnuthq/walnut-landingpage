import { Button } from '../../components/button'
import { Container } from '../../components/container'
import { Footer } from '../../components/footer'
import { GradientBackground } from '../../components/gradient'
import { Navbar } from '../../components/navbar'
import header_cairovm from "@/images/blog/Cairo Playground.jpg";
import { Heading, Subheading } from '../../components/text'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import author from "@/images/blog/J6fWCiVz_400x400.jpg";
import Image from 'next/image'
import cairovmcodes_playground from "@/images/blog/cairovm-codes playground.png";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'cairovm.codes – Run, Debug, and Learn Cairo Programming | Walnut',
  description: 'cairovm.codes is a powerful web application that serves both educational and debugging purposes, helping users run and explore Cairo programs.',
}

export default function Blog() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">
          Monday, September 16, 2024
        </Subheading>
        <Heading as="h1" className="mt-2">
          cairovm.codes – Run, Debug, and Learn Cairo Programming
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
              <div className="flex items-center gap-3">
                  <Image
                    alt=""
                    src={author}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                <div className="text-sm/5 text-gray-700">
                  @romanmazur
                </div>
              </div>
          </div>
          <div className="text-gray-700">
            <div className="max-w-2xl xl:mx-auto">
                <Image
                  alt={''}
                  src={header_cairovm}
                  className="mb-10 aspect-[3/2] w-full rounded-2xl object-cover shadow-xl"
                />
                <div>
                  <div>
                    <div className="mx-auto">
                      <main>
                        <article className="relative">
                          <div className="mt-12 mb-24 prose">
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
                                cairo-lang.org/cairovm
                              </a>.
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
      <Footer />
    </main>
  );
}
