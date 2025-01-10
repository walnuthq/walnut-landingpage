import { Layout } from "./components/Layout";
import { SparkleIcon } from "./components/SparkleIcon";
import { article as Article, img as Image } from "./components/mdx";
import WalnutHPImage from "@/images/changelog/walnut-hp.png";
import CallTraceInternal from "@/images/changelog/call-trace-internal.png";
import TxSimIntro from "@/images/changelog/tx-sim-intro.gif";
import CodeSnippet20240614 from "@/images/changelog/CodeSnippet20240614.png";
import CodeSnippet20240621 from "@/images/changelog/CodeSnippet20240621.png";
import CodeSnippet20240628 from "@/images/changelog/CodeSnippet20240628.png";
import CodeSnippet20240705 from "@/images/changelog/CodeSnippet20240705.png";
import CodeSnippet20240712 from "@/images/changelog/CodeSnippet20240712.png";
import CodeSnippet20240719 from "@/images/changelog/CodeSnippet20240719.png";
import CodeSnippet20240726 from "@/images/changelog/CodeSnippet20240726.png";
import CodeSnippet20240802 from "@/images/changelog/CodeSnippet20240802.png";
import CodeSnippet20240809 from "@/images/changelog/CodeSnippet20240809.gif";
import CodeSnippet20240816 from "@/images/changelog/CodeSnippet20240816.png";
import CodeSnippet20240823 from "@/images/changelog/CodeSnippet20240823.png";
import CodeSnippet20240830 from "@/images/changelog/CodeSnippet20240830.png";
import CodeSnippet20240906 from "@/images/changelog/CodeSnippet20240906.png";
import CodeSnippet20240913 from "@/images/changelog/CodeSnippet20240913.gif";
import CodeSnippet20240920 from "@/images/changelog/CodeSnippet20240920.png";
import CodeSnippet20240927 from "@/images/changelog/CodeSnippet20240927.gif";
import CodeSnippet20241004 from "@/images/changelog/CodeSnippet20241004.png";
import CodeSnippet20241011 from "@/images/changelog/CodeSnippet20241011.gif";
import CodeSnippet20241018 from "@/images/changelog/CodeSnippet20241018.png";
import CodeSnippet20241025 from "@/images/changelog/CodeSnippet20241025.png";
import CodeSnippet20241101 from "@/images/changelog/CodeSnippet20241101.png";
import CodeSnippet20241108 from "@/images/changelog/CodeSnippet20241108.png";
import CodeSnippet20241115 from "@/images/changelog/CodeSnippet20241115.png";
import CodeSnippet20241122 from "@/images/changelog/CodeSnippet20241122.png";
import CodeSnippet20241129 from "@/images/changelog/CodeSnippet20241129.gif";
import CodeSnippet20241220 from "@/images/changelog/CodeSnippet20241220.png";
import Link from "next/link";

export default function Page() {
  return (
    <Layout>
      <Article date={"2025-10-20T00:00Z"} id="release">
        <>
          <h2 className="font-bold my-4 text-xl">Walnut Beta Launch 🚀</h2>
          <p className="text-gray-500">
            This week, after one year of developement, we finally launched the Beta version of{" "}
            <Link href="https://app.walnut.dev" className="text-blue-500">
              Walnut
            </Link>
            ! Dive in and let us know your thoughts as we continue to improve. We have a <Link href="https://t.me/walnuthq" target="_blank" className="text-blue-500">
              Telegram group here
            </Link>.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Brand new landing page with all the bell and whistles. <Link href="https://walnut.dev/" target="_blank" className="text-blue-500">
                Check it out!
              </Link>{" "}
            </li>
            <li>
              <Link href="https://docs.walnut.dev/" className="text-blue-500">
                New Docs
              </Link>.
            </li>
            <li>
              Added <code>paymaster_data</code> and <code>resource_bounds</code> to transaction info section in simulations.
            </li>
            <li>
              In the Call Trace, <code>DCALL</code> Frame type is now split into <code>DELEGATE</code> and <code>CALL</code>, making it easier to
              differentiate between entry point and library functions with identical names.
            </li>
          </ul>
        </>
      </Article>

      <Article date={"2024-12-20T00:00Z"} id="sign-up">
        <Image src={CodeSnippet20241220} alt="sign-up" unoptimized />
        <>
          <h2 className="font-bold my-4 text-xl">New GitHub Sign-In</h2>
          <p className="text-gray-500">
            This week, we added the ability to sign up to Walnut using a GitHub
            Account.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Added proper handling for transactions that REVERT due to
              &quot;run out of resources&quot; error.
            </li>
            <li>
              Improved syntax highlighting in Walnut Docs, making code snippets
              more readable.
            </li>
            <li>Removed the Events Tab. We plan to bring events back later.</li>
          </ul>
        </>
      </Article>

      <Article date={"2024-12-13T00:00Z"} id="scarb-downloader">
        <>
          <h2 className="font-bold my-4 text-xl">
            Support for *ALL* Cairo versions
          </h2>
          <p className="text-gray-500">
            This week, we built an automation that allows our Contract
            Verification Service to automatically support new Cairo versions as
            soon as they are released. No more &quot;unsupported Cairo
            version&quot; messages during smart contract verification on
            Starknet!
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Retro-added support for Cairo versions <code>2.9.1</code> and{" "}
              <code>2.9.2.</code>
            </li>
            <li>
              Updated the Transaction Simulation Form to use
              transaction&nbsp;version&nbsp;<code>3</code> as the default
              option.
            </li>
          </ul>
        </>
      </Article>

      <Article date={"2024-12-06T00:00Z"} id="bug-fixes">
        <>
          <h2 className="font-bold my-4 text-xl">Bug Fixes 🐛🐞🪲🕷️🪳🦟</h2>
          <p className="text-gray-500">
            This week, we focused on bug fixing. And we also extended our
            Contract Verification service to support Cairo 2.8.5.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Fixed a bug that caused simulation to fail when performed on the
              latest block number.
            </li>
            <li>
              Resolved an issue where the call trace was not displayed for
              reverted transactions.
            </li>
            <li>
              Improved handling of the <code>execute</code> account function
              when it fails due to an undeployed contract. The transaction
              status now shows <code>REVERTED</code> with a clear error
              indicator.
            </li>
            <li>
              Added <code>sierra-replace-ids</code> to the{" "}
              <code>Scarb.toml</code> configuration, ensuring{" "}
              <code>sierra_program_debug_info</code> is included in the contract
              class during the build process.
            </li>
          </ul>
        </>
      </Article>

      <Article date={"2024-11-29T00:00Z"} id="loop-removal-from-call-trace">
        <Image
          src={CodeSnippet20241129}
          alt="loop-removal-from-call-trace"
          unoptimized
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Loop Removal from Call Traces
          </h2>
          <p className="text-gray-500">
            This week, we streamlined loop handling in the call trace by
            removing loops and ensuring function calls within them are displayed
            at the correct level.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Adjusted the build configuration during Contract Verification to
              use the release profile, aligning with Starknet Foundry&apos;s
              setup.
            </li>
            <li>
              Fixed an issue in Transaction Simulations where errors weren’t
              shown for undeployed contracts.
            </li>
            <li>
              Updated the documentation{" "}
              <Link
                href="https://docs.walnut.dev/verify-contract-classes"
                className="text-blue-500"
              >
                Walnut Verification Guide
              </Link>{" "}
              with the new Walnut API Contract Verification service, ensuring
              users are up to date with the latest functionality.
            </li>
            <li>
              Improved frontend performance by removing regexes from Call Trace
              function formatting.
            </li>
          </ul>
        </>
      </Article>

      <Article date={"2024-11-22T00:00Z"} id="new-verification">
        <Image src={CodeSnippet20241122} alt="new-verification" unoptimized />
        <>
          <h2 className="font-bold my-4 text-xl">New Verification Flow</h2>
          <p className="text-gray-500">
            We&apos;ve enhanced the contract verification process by enabling
            users to verify contracts using only the source code, simplifying
            the process and making it more user-friendly.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Added a verification request information to the verifcation status
              response.{" "}
              <Link
                href="https://api.walnut.dev/v1/verification/7df6bcf6-8c14-4e84-b4dc-4992418a964c/status"
                className="text-blue-500"
              >
                Look example here
              </Link>
              .
            </li>
            <li>
              Added support for contract verification with Cairo version 2.8.4.
            </li>
            <li>Improved the contract page to support custom networks.</li>
            <li>
              Resolved an issue where the presence of the{" "}
              <code>license-file</code> field in Scarb.toml caused verification
              to fail.
            </li>
            <li>
              Fixed an issue where error traces for contract calls were missing.
            </li>
            <li>
              Introduced minor UI adjustments and performance optimizations to
              enhance overall usability and responsiveness.
            </li>
          </ul>
        </>
      </Article>

      <Article date={"2024-11-15T00:00Z"} id="function-call-details">
        <Image
          src={CodeSnippet20241115}
          alt="function-call-details"
          unoptimized
        />
        <>
          <h2 className="font-bold my-4 text-xl">New Memory Window</h2>
          <p className="text-gray-500">
            We&apos;re excited to introduce a brand new Memory Window in the
            Debugger to display function call arguments and results.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Made debugger windows resizable, giving you more control over your
              workspace and helping you focus on what matters.
            </li>
            <li>
              Core Starknet functions in the call trace are now collapsed by
              default, making large transactions easier to navigate.
            </li>
            <li>
              Added support for class hash verification, a feature requested by
              StarkWare.
            </li>
            <li>
              Fixed contract display issues in the call trace to make the
              application more reliable.
            </li>
          </ul>
        </>
      </Article>

      <Article date={"2024-11-08T00:00Z"} id="class-page">
        <Image src={CodeSnippet20241108} alt="class-page" unoptimized />
        <>
          <h2 className="font-bold my-4 text-xl">
            Brand New Page for Class Details
          </h2>
          <p className="text-gray-500">
            In this release, we&apos;ve introduced a new Class Page that
            displays details about the class, including the Class Hash, the list
            of networks where the class is declared, and the associated source
            code.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Added form validation to the Transaction Simulation dialog to help
              users avoid errors and ensure correct input.
            </li>
            <li>
              Included <code>ContractState</code> function argument in the Call
              Trace, enabling users to explore these values.
            </li>
            <li>
              Fixed a bug that caused inconsistent state when declare, deploy,
              and invoke transactions occurred within the same block. This
              improvement ensures accurate and reliable transaction processing
              in this scenario.
            </li>
            <li>
              Improved the loading state text in the Contract Verification
              window for clarity.
            </li>
          </ul>
        </>
      </Article>

      <Article date={"2024-11-01T00:00Z"} id="args-res-simplification">
        <Image
          src={CodeSnippet20241101}
          alt="args-res-simplification"
          unoptimized
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Clearer Arguments and Results representation
          </h2>
          <p className="text-gray-500">
            This week, we simplified the Call Trace by removing argument and
            result namespaces and skipping system arguments. This reduces visual
            complexity, making it easier for users to navigate function calls!
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Added Debugger Keyboard Shortcuts:
              <ul className="list-disc list-inside">
                <li>
                  <code>b</code> &mdash; Step Back
                </li>
                <li>
                  <code>n</code> &mdash; Step Into
                </li>
                <li>
                  <code>o</code> &mdash; Step Over
                </li>
              </ul>
            </li>
            <li>
              Improved error messages in the Transaction Simulation Dialog to
              help users complete the form more easily.
            </li>
            <li>
              Fixed a bug in fetching CASM instructions. Previously, some
              instructions were missed, causing issues in specific transactions.
              Now, all CASM instructions are reliably retrieved, resolving the
              issue.
            </li>
            <li>
              Resolved issues with transaction inconsistencies on custom
              networks by adding the chain ID of custom networks to the
              transaction execution context.
            </li>
            <li>
              Enhanced the mobile experience by fixing the navigation burger
              menu on the home screen and ensuring the footer remains anchored
              at the bottom of the page.
            </li>
          </ul>
        </>
      </Article>

      <Article date={"2024-10-25T00:00Z"} id="step-over">
        <Image src={CodeSnippet20241025} alt="step-over" unoptimized />
        <>
          <h2 className="font-bold my-4 text-xl">
            Step Over Button in Debugger
          </h2>
          <p className="text-gray-500">
            We finally added the &apos;Step Over&apos; button, one of the most
            requested features from our early users. It speeds up the debugging
            experience by allowing developers to skip over functions and focus
            on the main logic, saving time and reducing the need to manually
            step through each line in deeply nested code.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Enhanced the Call Trace with <code>__validate__</code> Account
              call, to better express{" "}
              <Link
                href="https://docs.starknet.io/architecture-and-concepts/accounts/account-functions/"
                className="text-blue-500"
              >
                Starknet&apos;s Account Abstraction model
              </Link>
              .
            </li>
            <li>
              Updated the copy and added a link to the{" "}
              <Link
                href="https://docs.walnut.dev/verify-contract-classes"
                className="text-blue-500"
              >
                Walnut Verification Guide
              </Link>{" "}
              in the debugger window for non-verified contracts.
            </li>
            <li>
              Addressed and resolved minor bugs to improve overall application
              stability and performance.
            </li>
          </ul>
        </>
      </Article>

      <Article date={"2024-10-18T00:00Z"} id="home-page-header">
        <Image src={CodeSnippet20241018} alt="Home page header" unoptimized />
        <>
          <h2 className="font-bold my-4 text-xl">
            New Homepage with easier access to Transaction Simulations and
            Settings
          </h2>
          <p className="text-gray-500">
            This week, we updated the homepage to enable users to simulate
            transactions and configure custom networks directly, without opening
            a tranasction first.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Resolved an issue with content width in the Call Trace,
              eliminating unnecessary horizontal scrolling.
            </li>
            <li>
              The Transaction Simulation dialog will now use the
              &quot;latest&quot; block by default if none is provided.
            </li>
            <li>Added support for Dojo Alpha 14 and 16.</li>
            <li>
              Other minor optimizations and ongoing work to prepare for upcoming
              improvements in the debugger window.
            </li>
          </ul>
        </>
      </Article>

      <Article date={"2024-10-11T00:00Z"} id="search-call-trace">
        <Image src={CodeSnippet20241011} alt="Search call trace" unoptimized />
        <>
          <h2 className="font-bold my-4 text-xl">
            New Search in the Call Trace
          </h2>
          <p className="text-gray-500">
            This week, we added a search feature to the call trace, allowing
            developers to search by contract address, contract name, entrypoint,
            or any Cairo function name.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Users can now search by contract name and address, with search
              results showing source file names and line numbers.
            </li>
            <li>
              Enhanced the copy-to-clipboard functionality across the app, with
              a toast notification confirming when content is copied.
            </li>
            <li>
              Added short transaction hash formatting for a better mobile
              experience.
            </li>
            <li>
              Fixed an issue with the horizontal scroll bar in the call trace,
              ensuring it always appears.
            </li>
          </ul>
        </>
      </Article>

      <Article date={"2024-10-04T00:00Z"} id="search-improvment">
        <Image src={CodeSnippet20241004} alt="Searh improvment" unoptimized />
        <>
          <h2 className="font-bold my-4 text-xl">Improvements in Search</h2>
          <p className="text-gray-500">
            In the latest release, we added a footer to search results that
            shows the networks being queried, making it easier to recognize when
            a custom network should be set if the search doesn&apos;t return
            expected results.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              As part of ongoing improvements to the Call Trace, we removed the
              &quot;Unknown Function&quot; frame which was only causing
              confusion.
            </li>
            <li>
              Collaborated with Dojo to support Katana blocks with multiple
              transactions. Thanks Dojo for your help on this{" "}
              <Link
                href="https://github.com/dojoengine/dojo/issues/2458"
                className="text-blue-500"
              >
                issue #2458
              </Link>
              .
            </li>
            <li>Added support for Dojo Alpha 13.</li>
            <li>
              Updated the Contract Verification service to support Cairo 2.8.2.
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-09-27T00:00Z"} id="expand-collapse-in-trace">
        <Image
          src={CodeSnippet20240927}
          alt="Call Trace Improvements"
          unoptimized
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Improvements in the Call Trace
          </h2>
          <p className="text-gray-500">
            Last week, we introduced several updates to enhance the Call Trace
            feature and improve overall product quality.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Introduced expand and collapse buttons to the Call Trace, making
              navigation between call frames easier and more intuitive.
            </li>
            <li>
              Fixed several bugs, resulting in improved stability and overall
              product quality.
            </li>
            <li>
              Added special handling to the call trace to report cases where
              source code locations are missing.
            </li>
            <li>
              The Cairo VM and Cairo compiler crates were upgraded to the latest
              versions, allowing simulations of transactions with contracts up
              to Cairo v2.8.2.
            </li>
          </ul>
        </>
      </Article>
      <Article
        date={"2024-09-20T00:00Z"}
        id="multiple-verification-improvments"
      >
        <Image
          src={CodeSnippet20240920}
          alt="Multiple class verfication"
          unoptimized
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Multiple Classes Verification
          </h2>
          <p className="text-gray-500">
            In the latest release, we introduced support for verifying multiple
            classes in a single request. This improves the Class Verification
            user experience and boosts performance.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Added support for Dojo Alpha 12, to support the latest on-chain
              game developers.
            </li>
            <li>
              Increased server resources to ensure faster response time and
              handle high-demand requests.
            </li>
            <li>
              Improved error handling by mapping errors, leading to clearer and
              more detailed debugging information.
            </li>
            <li>
              Addressed several Class Verification issues reported primarily by
              DOJO game developers. These include configuring Scarb caching for
              Sozo and applying the default namespace from the Dojo
              configuration.
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-09-13T00:00Z"} id="debug-contract-call-page">
        <Image
          src={CodeSnippet20240913}
          alt="debug-page-contract-call"
          unoptimized
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Contract calls in Debugger Window
          </h2>
          <p className="text-gray-500">
            The step-by-step debugger now supports nested contract flows. When
            you reach a contract call in the source code, just hit “Next” to
            seamlessly move into the new contract and continue debugging.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Integrated Walnut into{" "}
              <Link
                href="https://book.dojoengine.org/toolchain/sozo"
                className="text-blue-500"
              ></Link>
              Sozo and added support for contract verification directly from
              Sozo.
            </li>
            <li>
              Added contract verification for custom networks, including support
              for hosted{" "}
              <Link
                href="https://book.dojoengine.org/toolchain/slot"
                className="text-blue-500"
              >
                Slot
              </Link>{" "}
              instances.
            </li>
            <li>
              Chain information has been added to the transaction simulation
              context, fixing occasional data inconsistencies in simulations.
            </li>
            <li>
              Updated the app UI to support full screen mode, making it easier
              to debug large codebases.
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-09-06T00:00Z"} id="new-settings-page">
        <Image src={CodeSnippet20240906} alt="settings-page" unoptimized />
        <>
          <h2 className="font-bold my-4 text-xl">
            Debugging on Custom Networks
          </h2>
          <p className="text-gray-500">
            This week we added support for debugging transactions on custom
            networks, a key request from DOJO on-chain game developers. Walnut
            now connects to any Starknet network via custom RPC URLs, with full
            support for debugging, simulating, and verifying smart contracts.
            Next week, we will pilot custom networks with hosted Slot instances
            in New York, meeting DOJO game developers and demonstrating Walnut.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Created a new Settings page to configure custom RPC URLs, enabling
              debugging transactions on custom networks.
            </li>
            <li>
              Aggregated search now displays transactions and verified contracts
              from mainnet, testnet, and custom networks.
            </li>
            <li>
              Fixed a caching bug that caused state mismatches and
              inconsistencies in transaction simulations.
            </li>
            <li>
              Extended Call Trace to include function call arguments, results,
              and interface names for internal calls.
            </li>
            <li>
              Improved regex parsing for function call names in the Call Trace
              for better readability.
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-08-30T00:00Z"} id="verification-status-api">
        <Image
          src={CodeSnippet20240830}
          alt="verification-status-api"
          unoptimized
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            More Resilient Contract Class Verification
          </h2>
          <p className="text-gray-500">
            In the latest release, we moved contract class verification to run
            in the background, making the service more resilient when verifying
            larger contracts or multiple contracts.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Introduced a new API endpoint to check the verification status of
              a contract class. Available at{" "}
              <code>{`/v1/verification/{:id}/status`}</code>.{" "}
              <Link
                href="https://api.walnut.dev/v1/verification/77f1d905-fdb4-4280-b7d6-57cd029d1259/status"
                className="text-blue-500"
              >
                Try it here
              </Link>
              .
            </li>
            <li>
              Enhanced the accuracy of simulated transactions by applying state
              transitions for all preceding transactions within the same block.
            </li>
            <li>
              Updated the nudge verification link from the Walnut app to direct
              users to the{" "}
              <Link
                href="https://docs.walnut.dev/verify-contract-classes"
                className="text-blue-500"
              >
                Walnut documentation
              </Link>
              .
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-08-23T00:00Z"} id="code-attribute-highlight">
        <Image
          src={CodeSnippet20240823}
          alt="code-attribute-highlight"
          unoptimized
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Code and Attribute Highlighting in Debugger
          </h2>
          <p className="text-gray-500">
            In the latest release, we introduced highlighting for both Cairo
            attributes and Code snippets in the step-by-step debugger.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Debugger windows automatically open to the nearest verified
              contract.
            </li>
            <li>Fixed a bug related to incorrect block timestamp.</li>
          </ul>
        </>
      </Article>
      <Article date={"2024-08-16T00:00Z"} id="aggregated-search">
        <Image src={CodeSnippet20240816} alt="aggregated-search" unoptimized />
        <>
          <h2 className="font-bold my-4 text-xl">Aggregated Search</h2>
          <p className="text-gray-500">
            In the latest release, we introduced aggregated search, allowing
            users to search for transactions, contracts, or classes across all
            networks.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              New contract page displays verified contract source files and
              code.
            </li>
            <li>
              A new API endpoint for verification that does not require{" "}
              <code>chain_id</code> is available at <code>/v1/verify/</code>.
              This is an important prerequisite for making Walnut work with
              fully on-chain games deployed to appchains like Slot.
            </li>
            <li>
              Added support for contract verification with Cairo version{" "}
              <code>2.7.0</code>.
            </li>
            <li>
              Enhanced code highlighting with additional Cairo location mapping
              in the execution trace.
            </li>
            <li>
              Launched{" "}
              <Link href="https://docs.walnut.dev/" className="text-blue-500">
                Walnut Documentation
              </Link>
              , with{" "}
              <Link
                href="https://docs.walnut.dev/verify-contract-classes"
                className="text-blue-500"
              >
                contract verification guide
              </Link>
              .
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-08-09T00:00Z"} id="source-file-switch-debug-info">
        <Image
          withoutBg
          src={CodeSnippet20240809}
          alt="The gif of source file switch"
          unoptimized
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Improvements to the Debugger Window
          </h2>
          <p className="text-gray-500">
            In the latest release, we improved the debugging experience by
            allowing switching between source files in the debug window.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              The Cairo version is now displayed in the contract details view.
            </li>
            <li>Improved error handling for contract verification.</li>
            <li>
              Added a message when no execution trace is found, instead of
              nudging users for verification.
            </li>
          </ul>
        </>
      </Article>
      <Article
        date={"2024-08-02T00:00Z"}
        id="transaction-page-additional-information"
      >
        <Image
          src={CodeSnippet20240802}
          alt="Transaction page information box"
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Improvements to the Transaction Information Box
          </h2>
          <p className="text-gray-500">
            In the latest release, we focused on enhancing the information box
            on the transaction page. We now display the transaction type,
            timestamp, and transaction version.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>Added support for Declare transactions.</li>
            <li>
              Input and output data can now be switched between Hexadecimal and
              Decimal formats, and vice versa.
            </li>
            <li>Improved handling of transaction simulation errors.</li>{" "}
          </ul>
        </>
      </Article>
      <Article date={"2024-07-26T00:00Z"} id="contract-calls-in-internal-trace">
        <Image
          src={CodeSnippet20240726}
          alt="Contract Call within Internal Function Call Trace"
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Improvements to the Call Trace
          </h2>
          <p className="text-gray-500">
            In the latest release, we focused on improving the call trace.
            Concretely, we worked on displaying contract calls within internal
            function calls. In the screenshot above, you can see the{" "}
            <code className="break-words">
              IVerificationHelper.calculation_proof
            </code>{" "}
            correctly placed right after the internal function call{" "}
            <code className="break-words">
              IVerificationHelperDispatcherImpl::calculation_proof
            </code>
            .
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              If the Contract Name is not present, the app now uses Interface
              Name as a fallback.
            </li>
            <li>Added human readable Chain ID to transaction details.</li>
          </ul>
        </>
      </Article>
      <Article date={"2024-07-19T00:00Z"} id="nudge-people-to-verify">
        <Image
          src={CodeSnippet20240719}
          alt="Sneak Peek of Walnut Window with nudging people to verify contracts"
        />
        <>
          <h2 className="font-bold my-4 text-xl">Contract Verification</h2>
          <p className="text-gray-500">
            In the latest release, we added full support for contract
            verification to Walnut. Developers can verify their contracts to get
            detailed call traces, step-by-step debugging, and execution mapping
            to the source code in the Cairo contracts.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Added a new alert message in the debugger tab and the call trace
              to prompt contract verification if the contract is not yet
              verified.
            </li>
            <li>Errors in the call traces now show details about the error.</li>
            <li>
              Opening the debugger from the call trace line now moves the
              execution to the corresponding line.
            </li>
            <li>Renamed &quot;testnet&quot; to &quot;sepolia&quot;.</li>
          </ul>
        </>
      </Article>
      <Article date={"2024-07-12T00:00Z"} id="internal-fn-call-panic">
        <Image
          src={CodeSnippet20240712}
          alt="Sneak Peek of Walnut Window with internal function call panic"
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Internal Function Call with Error
          </h2>
          <p className="text-gray-500">
            In the latest release, we focused on displaying errors in the call
            trace.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Added error details below the deepest internal function call where
              the panic occurred.
            </li>
            <li>
              In collaboration with Software Mansion, we added contract
              verification into foundry. Check the guide documentation{" "}
              <Link
                href="https://github.com/foundry-rs/starknet-foundry/blob/master/docs/src/starknet/verify.md"
                className="text-blue-500"
              >
                here.
              </Link>
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-07-05T00:00Z"} id="arguments-and-result-values">
        <Image
          src={CodeSnippet20240705}
          alt="Sneak peak of the Walnut Debugger Window with arguments and result values"
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Added Argument and Result Values to the Debugger
          </h2>
          <p className="text-gray-500">
            Function arguments and return results are now visible in the
            step-by-step-debugger. In the screenshot above, the{" "}
            <code>extract_age</code> function returns a single result:{" "}
            <code>18</code>.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              The debugger now shows arguments and return values. Some data
              might be missing in specific places, which will be improved in the
              future.
            </li>
            <li>
              Internal function calls in the Call Trace now display the argument
              and result values.
            </li>
            <li>
              New API endpoint for querying the source code of verified
              contracts via API using <code>Class ID</code>. Available at the{" "}
              <code>
                /{`{`}network_id{`}`}/classes/{`{`}class_id{`}`}
              </code>{" "}
              endpoint.{" "}
              <Link
                href="https://api.walnut.dev/v1/sn_main/classes/0x04aab8d89aa68063b10d5dfa8ce69660c5ba2797698918b08b57256685630675"
                className="text-blue-500"
              >
                Try it here
              </Link>
              .
            </li>
            <li>
              Added support for the Sepolia testnet and deprecated Goerli.
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-06-28T00:00Z"} id="verification-api">
        <Image
          src={CodeSnippet20240628}
          alt="Sneak peak of the Walnut Verifaction API for starknet smart contracts"
        />
        <>
          <h2 className="font-bold my-4 text-xl">Contract Verification API</h2>
          <p className="text-gray-500">
            In the latest release, we have introduced the contract class
            verification API endpoint.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Launched new API at{" "}
              <Link href="https://api.walnut.dev/" className="text-blue-500">
                api.walnut.dev
              </Link>{" "}
              with a <code>/verify</code> endpoint for Cairo Smart Contract
              Verification.
            </li>
            <li>
              In the Call Trace, the DELEGATE and CALL functions have now been
              merged and are displayed as DCALL.
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-06-21T00:00Z"} id="debugger-launch">
        <Image
          src={CodeSnippet20240621}
          alt="Sneak peak of the Walnut Debugger for Starknet Transactions"
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Debugger for Starknet Transactions
          </h2>
          <p className="text-gray-500">
            In the latest release, we finally launched the first version of the
            step by step debugger. It comes with support for multiple contracts
            in the transaction, and moves the code execution accordingly.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              External calls now also present the source code of the contract in
              Cairo.
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-06-14T00:00Z"} id="source-code-introduction">
        <Image src={CodeSnippet20240614} alt="Code snippet on Walnut" />
        <>
          <h2 className="font-bold my-4 text-xl">
            Contract Source Code in Call Trace
          </h2>
          <p className="text-gray-500">
            In the latest release, we added support for displaying the
            corresponding Cairo source code for each call in the call trace.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Each call trace now displays the associated Cairo line and the
              corresponding code snippet where the call occurred. This only
              works for verified contracts.
            </li>
            <li>
              The new events tab showcases all emitted events for simulated
              transactions.
            </li>
            <li>
              Data for arguments and results is now also available in view
              functions.
            </li>
          </ul>
        </>
      </Article>
      <Article
        date={"2024-06-07T00:00Z"}
        id="transaction-simulation-introduction"
      >
        <Image
          src={TxSimIntro}
          alt="Gif of resimulating an existing transaction on Walnut"
        />
        <>
          <h2 className="font-bold my-4 text-xl">Transaction Simulations</h2>
          <p className="text-gray-500">
            In this release we added support for transaction simulations into
            Walnut. You can simulate a new transaction, or re-simulate an
            existing one.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              New transaction simulation screen that allows to re-run existing
              transactions or simulate new ones on the Starknet Mainnet network
            </li>
            <li>
              Simulations support modification of the following transaction
              parameters: sender address, calldata, block number, chain id, and
              transaction version
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-05-31T00:00Z"} id="call-trace-internal">
        <Image
          src={CallTraceInternal}
          alt="Internal function calls in a transaction call trace."
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Internal functions in the call trace
          </h2>
          <p className="text-gray-500">
            In this release we added support for internal function calls in the
            call trace. After verifying contracts, the call trace presents calls
            to every Cairo function, and will also present details about each
            call&apos;s arugments and return values.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Support for different colors in the call trace to visually
              separate certain elements. For example contract names,
              entrypoints, arguments.
            </li>
            <li>
              After clicking on a call trace item, you get details about
              argument and return values.
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-05-24T00:00Z"} id="initial-post">
        <Image
          src={WalnutHPImage}
          alt="Walnut homepage with search for transactions"
        />
        <>
          <h2 className="font-bold my-4 text-xl">Walnut v0.1.0</h2>
          <p className="text-gray-500">
            This is our first changelog message. We started building Walnut to
            make transaction debugging and simulations on Starknet easier. In
            the initial version, we plan the following features:
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            Transaction Call Trace
          </h3>
          <ul className="list-disc text-gray-500 pl-6 mt-4">
            <li>Support for any transaction, including failed transactions</li>
            <li>
              The call trace will include calls to internal functions within
              each contract involved in the simulated transaction
            </li>
            <li>
              Each call will present decoded arguments with names and values, as
              well as the return value
            </li>
            <li>
              For verified contracts, ability to see the exact call location
              mapped to the Cairo source code.
            </li>
          </ul>

          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            Contract Verification
          </h3>
          <ul className="list-disc text-gray-500 pl-6 mt-4">
            <li>
              Ability to upload the contract source code to Walnut for
              verification
            </li>
          </ul>

          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            Step by step debugger
          </h3>
          <ul className="list-disc text-gray-500 pl-6 mt-4">
            <li>
              Visual debugger that will allow to re-run the transaction
              line-by-line, mapped to the original source code in Cairo.
            </li>
          </ul>

          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            Transaction Simulations
          </h3>
          <ul className="list-disc text-gray-500 pl-6 mt-4">
            <li>
              Visual debugger that will allow to re-run the transaction
              line-by-line, mapped to the original source code in Cairo.
            </li>
          </ul>
        </>
      </Article>
    </Layout>
  );
}
