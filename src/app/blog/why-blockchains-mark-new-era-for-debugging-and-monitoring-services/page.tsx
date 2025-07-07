import { Button } from '../../../components/button'
import { Container } from '../../../components/container'
import { Heading, SectionHeading, Subheading } from '../../../components/text'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import author from "@/images/blog/J6fWCiVz_400x400.jpg";
import Image from 'next/image'
import TenderlyGasProfiler from "@/images/blog/tenderly-gas-profiler.webp";
import type { Metadata } from 'next';
import { generateMetadata } from '@/app/utils/generate-metadata-service';
import { Footer } from '@/components/footer'
import { GetStarted } from '@/components/get-started'
import MainHeader from '@/components/main-header'
import BlogScreenshot from '../components/BlogScreenshot';

const title = "Why blockchains mark a new era for debugging and monitoring services";
const description = "The application error monitoring market, estimated to be worth over USD 29 billion, is on the cusp of a significant transformation.";
export const metadata: Metadata = generateMetadata(title, description, 'https://www.walnut.network/blog/why-blockchains-mark-new-era-for-debugging-and-monitoring-services');

export default function Blog() {
  return (
    <main className="overflow-hidden">
    <MainHeader/>
    <Container>
      <SectionHeading className="mt-32">
        Saturday, July 06, 2024
      </SectionHeading>
      <Heading as="h1" className="mt-2">
        Why blockchains mark a new era for debugging and monitoring services
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
            <div>
              <div className="">
                <div className="max-w-3xl mx-auto">
                  <main>
                    <article className="relative">
                      <div className="mt-12 mb-24 prose">
                        <p className="lead">
                          The application error monitoring market, estimated to be
                          worth over USD 29 billion, is on the cusp of a significant
                          transformation. As we transition from the Cloud era to the
                          Blockchain era, the landscape of debugging and monitoring
                          services is set to change dramatically. Historically, each
                          major shift in computing platforms has brought new
                          challenges and opportunities, reshaping the monitoring
                          market and introducing new key players.
                        </p>
                        <p>
                          Big companies like Microsoft and Apple, along with indie
                          developers and game studios, rely heavily on real-time
                          application monitoring systems to ensure reliability and
                          meet user requirements. However, as we stand at the
                          threshold of a new era of computation—blockchain
                          technology—the current monitoring solutions are poised to
                          face unprecedented disruptions.
                        </p>

                        <p>
                          This article delves into the reasons behind this anticipated
                          shift and explores the new opportunities that blockchain
                          technology offers. We will journey through the history of
                          computing over the past 70 years, highlighting how each
                          era—from the early days of computing to the cloud and mobile
                          era—reshaped the application monitoring landscape. We will
                          then contrast the current cloud-based era with the emerging
                          blockchain era, illustrating why traditional monitoring
                          tools may fall short in this new environment.
                        </p>

                        <p>
                          Finally, we will analyse the current state of
                          blockchain-specific monitoring tools and assess the
                          burgeoning market opportunities for new players poised to
                          address the unique challenges introduced by blockchain
                          technology. At Walnut, we are excited about these
                          opportunities and are actively exploring multiple solutions
                          across various blockchain ecosystems. Join us as we explore
                          why blockchains mark a new era for debugging and monitoring
                          services.
                        </p>

                        <h2>
                          History of computation and changes to the monitoring market
                        </h2>

                        <p>
                          Let&apos;s start by briefly looking at the history of
                          computing platforms and how each change caused new players
                          in the application monitoring market.
                        </p>

                        <h3>Early Days of Computing (1940s-1960s)</h3>

                        <p>
                          The earliest computers were rudimentary, with programming
                          done via punched cards and machine code. Debugging was
                          mostly a manual process, often involving physical inspection
                          of the hardware and simple printouts.
                        </p>

                        <p>
                          <strong>Interesting fact:</strong> The term “debugging”
                          became widely known in this era due to an incident in 1947
                          when{" "}
                          <a
                            href="https://en.wikipedia.org/wiki/Grace_Hopper"
                            target="_blank"
                          >
                            Grace Hopper&apos;s
                          </a>{" "}
                          team found a moth causing a problem in the{" "}
                          <a
                            href="https://en.wikipedia.org/wiki/Harvard_Mark_II"
                            target="_blank"
                          >
                            Harvard Mark II
                          </a>{" "}
                          computer. Removing the moth fixed the problem, coining the
                          term “debugging” for fixing software and hardware issues.
                        </p>

                        <p>
                          <strong>
                            Key players in the application monitoring market during
                            the Early Days of Computing era:
                          </strong>
                        </p>

                        <ul>
                          <li>
                            <strong>IBM</strong>: provided mainframe computers and
                            basic debugging tools.
                          </li>
                        </ul>

                        <h3>Personal Computing Era (1970s-1990s)</h3>

                        <p>
                          As computers became more accessible to the general public
                          and more performant, this led to the development of new,
                          more complex applications. More complex applications opened
                          up new challenges in finding computer bugs and ensuring they
                          worked as intended 100% of the time, leading to the rise of
                          new players in the monitoring market. New debuggers and
                          monitoring services were introduced, including paid
                          integrated development environments (IDEs), graphical
                          debuggers, and advanced error reporting systems.
                        </p>

                        <p>
                          <strong>
                            Key players in the application monitoring market during
                            the Personal Computing era:
                          </strong>
                        </p>

                        <ul>
                          <li>
                            <strong>Borland:</strong> Turbo Pascal, a paid IDE with
                            integrated debugging tools.
                          </li>
                          <li>
                            <strong>Microsoft:</strong> Early versions of Visual
                            Studio offered powerful debugging features. Visual Studio
                            later became a leading paid IDE with comprehensive
                            debugging capabilities, and still exists today.
                          </li>
                        </ul>

                        <h3>Mobile and Cloud Computing Era (2000s-2010s)</h3>

                        <p>
                          Apps running in the cloud and users connecting to them from
                          their mobile devices dramatically changed how programs were
                          written and run, leading to a new disruption in monitoring
                          systems.
                        </p>

                        <p>
                          Turbo Pascal was no longer the main language. Instead, we
                          saw the rise of new, web-native languages like PHP and
                          JavaScript.
                        </p>

                        <p>
                          This shift in the monitoring market brought (yet again) new
                          solutions offering advanced tools for real-time error
                          monitoring and comprehensive performance profiling.
                        </p>

                        <p>
                          <strong>
                            Key players in the debugging and monitoring market during
                            the Mobile and Cloud Computing era included:
                          </strong>
                        </p>

                        <ul>
                          <li>
                            <strong>Sentry:</strong> Offered paid plans for advanced
                            error monitoring and diagnostics.
                          </li>
                          <li>
                            <strong>Datadog:</strong> Provided comprehensive
                            monitoring solutions with paid plans.
                          </li>
                          <li>
                            <strong>New Relic:</strong> Known for application
                            monitoring tools that optimize performance.
                          </li>
                        </ul>

                        <p>
                          All of these players are still dominant today and are worth
                          billions of dollars. Sentry is valued at $3 billion, Datadog
                          at $39.42 billion, and New Relic is in the process of being
                          acquired by Francisco Partners and TPG for $6.5 billion.
                        </p>

                        <p>
                          However, a new era is just around the corner, which might
                          significantly disrupt today&apos;s dominant monitoring
                          service players and lead to the emergence of new solutions,
                          similar to what we saw in the past.
                        </p>

                        <h3>Blockchain Era (2020s and beyond)</h3>

                        <p>
                          Blockchain technology is a radical shift in computation.
                          More and more companies are{" "}
                          <a
                            href="https://www.coinbase.com/en-fr/blog/the-state-of-crypto-the-fortune-500-moving-onchain"
                            target="_blank"
                          >
                            moving on chain
                          </a>
                          . Brian Armstrong, the CEO of Coinbase, claims that{" "}
                          <a
                            href="https://dailyhodl.com/2023/11/05/brian-armstrong-says-on-chain-is-the-new-online-as-coinbase-beats-expectations-with-674148000-in-revenue/"
                            target="_blank"
                          >
                            on-chain is the new online
                          </a>
                          , implying that blockchains are a similar shift to how Cloud
                          Era advanced the Personal Computing Era. Today, we already
                          see applications in Healthcare, Logistics, Finance, Social
                          Media, Gaming and more, exploring the blockchain technology.
                        </p>

                        <p>
                          Whether blockchains actually become the next computing
                          platform is yet to be seen. But if they do, and we firmly
                          believe they will, it will mark another revolution in
                          application monitoring systems and present a large
                          opportunity for new solutions to emerge.
                        </p>

                        <h2>
                          New Challenges in Computation introduced by the Blockchains
                          Era
                        </h2>

                        <p>
                          In this section, we compare the Blockchain era with the
                          Mobile and Cloud era and offer key differences that lead to
                          the requirement of new specialised monitoring services. For
                          more condensed insights please refer to the overview table
                          at the end of this section.
                        </p>

                        <h3>Execution environment</h3>

                        <p>
                          The execution environment refers to where application code
                          runs, which significantly impacts the requirements for
                          monitoring and debugging systems.
                        </p>

                        <p>
                          <strong>Cloud:</strong> Cloud systems and mobile
                          applications typically involve executing programs on
                          UNIX-based machines. These machines are well-understood by
                          the existing monitoring services and have been established
                          for a long time, providing a familiar environment for
                          developers.
                        </p>

                        <p>
                          <strong>Blockchain:</strong> Blockchain applications do not
                          run on existing operating systems like UNIX. Instead, they
                          typically run in specialised virtual machines, such as the
                          Ethereum Virtual Machine (EVM). Programs are invoked through
                          transactions, and the execution is irreversible and
                          permanent. Programs are encoded as smart contracts, deployed
                          to the blockchain in the form of bytecode.
                        </p>

                        <p>
                          There is a need for a specialised monitoring system that
                          understands the specifics of blockchain Virtual Machines
                          such as the EVM or Cairo VM or Solana VM.
                        </p>

                        <h3>Data Storage</h3>
                        <p>
                          Data storage involves how data is managed and stored and in
                          what format it is encoded, which affects how monitoring
                          services deal with the data for later processing.
                        </p>
                        <p>
                          <strong>Cloud:</strong> Traditional databases such as
                          PostgreSQL, MySQL, and SQL Server are used. These systems
                          are centralised and well-understood by existing monitoring
                          tools.
                        </p>
                        <p>
                          <strong>Blockchain:</strong> Data is stored in a distributed
                          manner using structures like Merkle trees and other
                          cryptographic methods. This storage format approach is
                          unfamiliar to many traditional monitoring systems, requiring
                          a different approach for decoding and understanding the
                          data.
                        </p>
                        <p>
                          Monitoring systems built for Cloud and Mobile applications
                          do not understand the specifics of blockchain data format.
                        </p>

                        <h3>Runtime Context and Logs</h3>
                        <p>
                          Existing solutions like Sentry and DataDog rely on runtime
                          logs created by applications running on mobile devices or in
                          the cloud. Blockchains, due to their decentralised style,
                          have a very different approach to logging.
                        </p>
                        <p>
                          <strong>Cloud:</strong> Programs usually generate logs about
                          their execution, which are utilised by monitoring services
                          like DataDog or Sentry to provide insights into problems and
                          potential fixes.
                        </p>
                        <p>
                          <strong>Blockchain:</strong> Logs generated by blockchain
                          nodes are very scarce and almost non-existent. This is due
                          to the nature of blockchains, where every program is
                          re-executed by thousands of validators, making it
                          impractical and expensive to generate extensive logs.
                        </p>
                        <p>
                          Blockchains do not generate logs and runtime context about
                          program execution because it would be too expensive. There
                          is a need for a radically different approach that involves
                          re-running, or simulating blockchain programs in a
                          controlled environment, to generate the extra logging and
                          analytics required.
                        </p>

                        <h3>Programming Languages</h3>
                        <p>
                          Programming languages used to write programs significantly
                          affect the tools and methods required for monitoring.
                        </p>
                        <p>
                          <strong>Cloud:</strong> The most popular programming
                          languages include Python, JavaScript, C#, Java, and Go.
                          These languages are well-supported by existing debugging and
                          monitoring tools.
                        </p>
                        <p>
                          <strong>Blockchain:</strong> Blockchain development requires
                          new and specialised languages. Examples include Solidity for
                          Ethereum and all EVM chains, Cairo for Starknet, Noir for
                          Aztec, and Rust for Solana.
                        </p>
                        <p>
                          Blockchains need monitoring software tailored to the
                          specific languages they use.
                        </p>

                        <h3>Program Source Code</h3>
                        <p>
                          The way Blockchains function brings new problems to how the
                          program source code is bundled, which causes challenges to
                          monitoring previously unseen.
                        </p>
                        <p>
                          <strong>Cloud:</strong> The program&apos;s source code is
                          fully created and owned by the program creator, making it
                          straightforward to debug and monitor. If the program has
                          dependencies to other libraries, those will be compiled with
                          the program to generate a single, self-containing bundle.
                        </p>
                        <p>
                          <strong>Blockchain:</strong> Blockchain applications coexist
                          and interact with other apps on the same chain, forming a
                          super-app. Developers often rely on other apps’
                          functionality without having access to their source code,
                          posing unique challenges for debuggers.
                        </p>
                        <p>
                          <i>An example:</i> The lending application zkLend can call
                          another application Ekubo to perform swaps of tokens in the
                          case of liquidation. The zkLend team only has access to the
                          zkLend&apos;s source code, and the zkLend&apos;s app bundle
                          only contains code related to zkLend. Even though the zkLend
                          app relies on Ekubo’s code, it doesn’t contain any Ekubo
                          app’s code in its app bundle. In Solana, this is called
                          Cross Program Invocation, and you can read more about it{" "}
                          <a href="https://solana.com/docs/core/cpi">here</a>.
                        </p>
                        <p>
                          The fact that blockchain apps often rely on other apps, but
                          at the same time do not have other app’s code in their
                          bundle, poses unique challenges for debuggers, which need to
                          understand the full context of all of the apps on the
                          blockchain in order to correctly present issues caused by
                          dependencies.
                        </p>

                        <h3>Cost of Running Applications</h3>
                        <p>
                          Performance monitoring is a subcategory of application
                          monitoring services. It focuses on tracking and managing the
                          performance and availability of software applications to
                          detect and diagnose complex performance issues, ensuring
                          optimal user experiences and system reliability.
                        </p>
                        <p>
                          <strong>Cloud:</strong> Users are billed based on the
                          resources they consume, such as compute power, storage, and
                          bandwidth. Pricing models are typically transparent and
                          predictable.
                        </p>
                        <p>
                          <strong>Blockchain:</strong> The cost structure is more
                          complex and is based on GAS, which price is dynamic and
                          varies all the time. Costs include transaction fees, smart
                          contract deployment, storage, and validator incentives.
                          These factors can fluctuate based on network demand and
                          other variables.
                        </p>
                        <p>
                          Blockchain apps handle application performance and cost very
                          differently. This requires specialised performance
                          monitoring tools that understand the concept of gas and the
                          role it plays in blockchain applications.
                        </p>

                        <h3>Aspect Comparison Table</h3>
                        <div className="w-full overflow-x-auto">
                          <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">
                                  Aspect
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                  Cloud Computing
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                  Blockchain
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                  Conclusion
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white">
                                <td className="border border-gray-300 px-4 py-2 font-semibold">
                                  Execution Environment
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Runs on UNIX-based machines
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Runs in specialized virtual machines (e.g., EVM)
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Blockchain applications run in different
                                  environments that require specialized monitoring
                                  services
                                </td>
                              </tr>
                              <tr className="bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 font-semibold">
                                  Data Storage
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Uses traditional databases (PostgreSQL, MySQL, SQL
                                  Server)
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Distributed storage (Merkle trees, cryptographic
                                  structures)
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Existing monitoring systems lack understanding of
                                  blockchain data management
                                </td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border border-gray-300 px-4 py-2 font-semibold">
                                  Runtime Context and Logs
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Generates logs used by monitoring services (DataDog,
                                  Sentry)
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Logs are scarce due to cost and redundancy issues
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Need for simulation-based approach to generate logs
                                  in a controlled environment
                                </td>
                              </tr>
                              <tr className="bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 font-semibold">
                                  Programming Languages
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Python, JavaScript, C#, Java, Go
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Blockchain specific languages like Solidity, Cairo,
                                  Noir
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Requires debugging and monitoring software tailored
                                  to blockchain-specific languages
                                </td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border border-gray-300 px-4 py-2 font-semibold">
                                  Program Source Code
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Source code is fully created and owned by the
                                  program creator
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Apps coexist and interact with each other via
                                  techniques like CPI
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Debuggers need full context understanding of the
                                  entire blockchain and its apps
                                </td>
                              </tr>
                              <tr className="bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2 font-semibold">
                                  Cost Structure
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Based on resource consumption (compute, storage,
                                  bandwidth)
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Based on gas consumption (blockchain specific)
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                  Needs specialised tools to predict and manage costs
                                  effectively
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <h2>Current state of monitoring tools for blockchains</h2>

                        <p>
                          In the previous section, we explained differences between
                          blockchains and Cloud systems, and presented concrete
                          examples why existing web2 monitoring systems (like Sentry
                          or DataDog) fall short in the new blockchain era. We
                          provided concrete examples of why blockchains present an
                          opportunity for new monitoring systems to emerge, purpose
                          built for the challenges introduced by blockchains.
                        </p>

                        <p>
                          In this section, we will explore some of the emerging tools
                          specifically built for monitoring and debugging blockchain
                          applications.
                        </p>

                        <h3>Tenderly</h3>

                        <p>
                          Tenderly is one of the most comprehensive tools for solving
                          the problems discussed in this article. Tenderly started
                          around 7 years ago with a debugger service for Ethereum and
                          EVM, and is now used by many Ethereum and EVM developers.
                        </p>
                        <p>
                          Over time, Tenderly added more advanced features like
                          transaction simulations, testnets for users who need to
                          develop applications privately, real time alerts and
                          detailed gas visualisation of transaction traces. Today,
                          Tenderly supports over 60 EVM chains. The company{" "}
                          <a
                            href="https://tracxn.com/d/companies/tenderly/__DrLeaVh3GgukU5F9S4CJDKeFpftkbpNZULDwY2dxZTI/funding-and-investors#:~:text=How%20much%20funding%20did%20Tenderly,held%20on%20Mar%2002%2C%202022."
                            target="_blank"
                          >
                            raised almost $60M over three rounds
                          </a>{" "}
                          (the last one was{" "}
                          <a
                            href="https://www.google.com/url?q=https://techcrunch.com/2022/03/02/blockchain-infra-startup-tenderly-raises-40m-after-seeing-500x-yoy-revenue-growth/?guccounter%3D1%26guce_referrer%3DaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%26guce_referrer_sig%3DAQAAADxU9_LQx8xCftbHVkT2wEVJV25Uc0nU0dymKiatt_w7XpAZEgVmxK1FBso5Fl7Xb5r8yOKEXRcpZYzBGDwWgAJvvzn4Lfv7Gzz7ZXZ5X4mZzVuEHumLfKm-xESD2fq77Yq_clpnRlYwhjIaMIYsBpBl_Wk5GnUo12Y1qq1PBih6&sa=D&source=docs&ust=1720291646965218&usg=AOvVaw1ZI1LQmS-ZbhjxuFaoO0Fw"
                            target="_blank"
                          >
                            series B where they raised $40M
                          </a>
                          ).
                        </p>

                        <p>
                          <strong>Pros</strong>
                        </p>
                        <ul>
                          <li>Tools focused on debugging and error monitoring.</li>
                          <li>Real-time monitoring and alerting.</li>
                          <li>Comprehensive debugging and performance analytics.</li>
                        </ul>

                        <p>
                          <strong>Cons</strong>
                        </p>
                        <ul>
                          <li>Support for EVM chains only.</li>
                        </ul>

                        <figure>
                        <div className="lg:bg-GREY lg:p-2 lg:-mx-24">
                        <div className="relative overflow-hidden [&+*]:mt-8 lg:bg-[url('/changelog-bg.svg')] bg-cover bg-center no-repeat lg:px-[5.5rem]">
                          <Image
                            src={TenderlyGasProfiler.src}
                            alt="Tenderly's Gas Profiler"
                            width={1300}
                            height={742}
                            className="rounded-3xl w-full h-auto max-w-2xl md:max-w-7xl mx-auto"
                          />
                          {/* <img src={TenderlyGasProfiler.src} alt="Tenderly's Gas Profiler" /> */}
                          </div>
                          </div>
                          <figcaption>
                            In the picture above you can see a screenshot of
                            Tenderly&apos;s Gas Profiler, a tool built for optimising
                            the gas consumption (or cost) of blockchain applications.
                          </figcaption>
                        </figure>
                        <h3>Foundry, Hardhat, Truffle</h3>
                        <p>
                          Besides Tenderly, there is a set of open-source tools for
                          developing and testing smart contracts on Ethereum and EVM
                          chains.
                        </p>
                        <p>
                          The tools, due to their open source nature, lack any more
                          advanced features for real-time application monitoring.
                        </p>

                        <p>
                          <strong>Pros</strong>
                        </p>
                        <li>Good for local development</li>
                        <li>Rich ecosystem and extensive documentation</li>
                        <p>
                          <strong>Cons</strong>
                        </p>
                        <li>Primarily for local development</li>
                        <li>Lack of real-time debugging and monitoring</li>
                        <li>Mostly support for EVM chains only</li>

                        <h3>Opportunity for New Players to Enter the Market</h3>
                        <p>
                          Tenderly has been a prominent player in advancing a
                          comprehensive blockchain monitoring system.
                        </p>
                        <p>
                          However, the blockchain monitoring market still faces
                          significant challenges. Tenderly&apos;s focus on EVM chains
                          leaves many other chains without solutions. Numerous non-EVM
                          chains, including many recent ZK-based validity rollups,
                          lack support. Even zkSync and Scroll, validity rollups that
                          claim EVM compatibility, are unsupported by Tenderly due to
                          differences in their underlying VMs. Additionally, smaller
                          fully EVM-compatible rollups also often lack Tenderly
                          support, likely due to cost considerations.
                        </p>
                        <p>
                          It&apos;s not just about Tenderly; there&apos;s substantial
                          room for improvement. More options are needed within the EVM
                          ecosystem, and non-EVM chains currently lack solutions for
                          real-time monitoring and debugging.
                        </p>

                        <h2>Market Opportunity for Blockchain Monitoring Services</h2>
                        <p>
                          To provide an estimate of the market opportunity for
                          blockchain monitoring, we will first analyse the size of
                          monitoring in Web 2.0 and calculate the ratio between
                          monitoring services and the total market cap of Web 2.0. We
                          will then estimate the blockchain market and its potential
                          growth. Finally, we will use the same ratio of monitoring
                          services market cap to the total Web 2.0 market cap and
                          apply it to the blockchain market cap to estimate the
                          potential of blockchain monitoring.
                        </p>
                        <p>
                          The total market size of Web 2.0, which includes companies
                          involved in social media, content creation, e-commerce, and
                          other internet-based services, is valued at around $14.8
                          trillion (
                          <a
                            href="https://www.cognitivemarketresearch.com/web-market-report"
                            target="_blank"
                          >
                            reference
                          </a>
                          ).
                        </p>

                        <p>
                          The combined market capitalization of key debugging and
                          monitoring services players — DataDog, Sentry, and New Relic
                          — is approximately $50 billion. Other companies offering
                          monitoring and application performance management (APM)
                          services include:
                        </p>
                        <ol>
                          <li>
                            Microsoft: Application Insights for real-time monitoring.
                          </li>
                          <li>Oracle: OCI Monitoring and Oracle Management Cloud.</li>
                          <li>IBM: Instana and IBM Cloud Monitoring.</li>
                          <li>
                            Cisco (AppDynamics): Real-time performance monitoring.
                          </li>
                          <li>
                            SolarWinds: Infrastructure and application monitoring
                            solutions.
                          </li>
                        </ol>

                        <p>
                          The global blockchain market was valued at $17.21 billion in
                          2023 and is projected to grow to $29.35 billion in 2024,
                          with a compound annual growth rate (CAGR) of 70.6%. (
                          <a
                            href="https://www.cognitivemarketresearch.com/web-market-report"
                            target="_blank"
                          >
                            reference
                          </a>
                          ) Another projection estimates the market will reach $1.4
                          trillion by 2030, growing at a CAGR of 87.7% (
                          <a
                            href="https://www.cognitivemarketresearch.com/web-market-report"
                            target="_blank"
                          >
                            reference
                          </a>
                          ). This growth spans industries such as finance, supply
                          chain, healthcare, gaming, and AI, driven by promises of
                          increased transparency, security, and efficiency.
                        </p>
                        <p>
                          The total market capitalization of debugging and monitoring
                          services for Web 2.0 is not explicitly available as a single
                          aggregated figure. However, combining the valuations above,
                          we estimate the application monitoring market is worth ~
                          $100 billion, or approximately 1% of the total $14.8
                          trillion Web 2.0 market. Given the same estimation, the
                          opportunity for blockchain monitoring services is projected
                          to be $9.52 billion.
                        </p>
                        <p>
                          Significant gaps exist in blockchain debugging and
                          monitoring tools. Financial impacts of blockchain-related
                          errors are substantial, with vulnerabilities and bugs in
                          smart contracts leading to losses exceeding $1 billion over
                          the past three years (
                          <a
                            href="https://www.cognitivemarketresearch.com/web-market-report"
                            target="_blank"
                          >
                            reference
                          </a>
                          ). As financial institutions like JPMorgan and HSBC move
                          more activities to blockchain, the potential for significant
                          financial losses due to errors increases. Robust debugging
                          and monitoring tools are critical to mitigating these risks
                          and ensuring the security of financial operations (
                          <a
                            href="https://www.cognitivemarketresearch.com/web-market-report"
                            target="_blank"
                          >
                            reference
                          </a>
                          ).
                        </p>
                        <p>
                          In conclusion, the substantial financial impact of
                          blockchain-related errors underscores the critical need for
                          advanced debugging and monitoring solutions. As blockchain
                          technology continues to integrate deeper into existing
                          systems like finance, healthcare, logistics, gaming, and
                          social, these tools are essential to safeguard against
                          risks.
                        </p>

                        <h2>Conclusion</h2>
                        <p>
                          We are at the beginning of a new era of computation:
                          Blockchain. This era presents unique opportunities for new
                          debugging and monitoring services, requiring specialised
                          tools compared to the existing monitoring leaders like
                          Datadog or Sentry, which are focused on monitoring
                          applications of the current Cloud era.
                        </p>
                        <p>
                          While some specialised tools like Tenderly or Foundry have
                          already been developed, there is still a growing need for
                          new solutions and players. This is because we see an
                          expansion of new blockchain technologies with varying
                          virtual machines like EVM, Solana, Starknet, Aptos, and
                          more.
                        </p>
                        <p>
                          The rapidly growing blockchain market underscores the
                          importance of robust tools, especially as financial
                          institutions adopt this technology. Significant financial
                          losses from smart contract errors highlight the need for
                          comprehensive solutions.
                        </p>
                        <p>
                          At Walnut, we are excited about the opportunities in
                          monitoring tools for the Blockchains and are exploring
                          multiple solutions across various blockchain ecosystems to
                          meet these emerging needs.
                        </p>
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
    <GetStarted/>
    <Footer />
  </main>
  );
}
