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
import Link from "next/link";

export default function Page() {
  return (
    <Layout>
      <Article date={"2024-09-06T00:00Z"} id="new-settings-page">
        <Image src={CodeSnippet20240906} alt="settings-page" unoptimized />
        <>
          <h2 className="font-bold my-4 text-xl">Debugging on Custom Networks</h2>
          <p className="text-gray-500">
          This week we added support for debugging transactions on custom networks, a key request from DOJO on-chain game developers. Walnut now connects to any Starknet network via custom RPC URLs, with full support for debugging, simulating, and verifying smart contracts. Next week, we will pilot custom networks with hosted Slot instances in New York, meeting DOJO game developers and demonstrating Walnut.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> More Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
            Created a new Settings page to configure custom RPC URLs, enabling debugging transactions on custom networks.
            </li>
            <li>
            Aggregated search now displays transactions and verified contracts from mainnet, testnet, and custom networks.
            </li>
            <li>
            Fixed a caching bug that caused state mismatches and inconsistencies in transaction simulations.
            </li>
            <li>
            Extended Call Trace to include function call arguments, results, and interface names for internal calls.
            </li>
            <li>
            Improved regex parsing for function call names in the Call Trace for better readability.
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
            <code>IVerificationHelper.calculation_proof</code> correctly placed
            right after the internal function call{" "}
            <code>IVerificationHelperDispatcherImpl::calculation_proof</code>.
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
