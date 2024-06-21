import { Layout } from "./components/Layout";
import { SparkleIcon } from "./components/SparkleIcon";
import { article as Article, img as Image } from "./components/mdx";
import WalnutHPImage from "@/images/changelog/walnut-hp.png";
import CallTraceInternal from "@/images/changelog/call-trace-internal.png";
import TxSimIntro from "@/images/changelog/tx-sim-intro.gif";
import CodeSnippet20240614 from "@/images/changelog/CodeSnippet20240614.png";
import CodeSnippet20240621 from "@/images/changelog/CodeSnippet20240621.png";

export default function Page() {
  return (
    <Layout>
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
            In the latest release, we finally launched the first version of the step by step debugger. It comes with support for multiple contracts in the transaction, and moves the code execution accordingly.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
            External calls now also present the source code of the contract in Cairo.
            </li>
          </ul>
        </>
      </Article>
      <Article date={"2024-06-14T00:00Z"} id="source-code-introduction">
        <Image
          src={CodeSnippet20240614}
          alt="Gif of showing an code snippet on Walnut"
        />
        <>
          <h2 className="font-bold my-4 text-xl">
            Contract Source Code in Call Trace
          </h2>
          <p className="text-gray-500">
            In the latest release, we added support for displaying the corresponding Cairo source code for each call in the call trace.
          </p>
          <h3 className="flex items-center gap-2 font-bold my-4 text-base">
            <SparkleIcon className="w-5 h-5" /> Improvements
          </h3>
          <ul className="list-disc text-gray-500 pl-6">
            <li>
              Each call trace now displays the associated Cairo line and the corresponding code snippet where the call occurred. This only works for verified contracts.
            </li>
            <li>
              The new events tab showcases all emitted events for simulated transactions.
            </li>
            <li>
              Data for arguments and results is now also available in view functions.
            </li>
            <li>
              In the Call Trace, the DELEGATE and CALL functions have now been merged and are displayed as DCALL.
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
