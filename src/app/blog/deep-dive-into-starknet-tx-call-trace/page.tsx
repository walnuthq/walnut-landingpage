import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { Footer } from "../../components/footer";
import { GradientBackground } from "../../components/gradient";
import { Navbar } from "../../components/navbar";
import { Heading, Subheading } from "../../components/text";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import marijamijailovic from "@/images/blog/marijamijailovic.png";
import Image from "next/image";
import full_call_trace from "@/images/blog/deep-dive-into-starknet-tx-call-trace/full_call_trace.png";
import __validate__ from "@/images/blog/deep-dive-into-starknet-tx-call-trace/__validate__.png";
import __execute__ from "@/images/blog/deep-dive-into-starknet-tx-call-trace/__execute__.png";
import get_beer_execution_flow from "@/images/blog/deep-dive-into-starknet-tx-call-trace/get_beer_execution_frame.png";
import verify_call from "@/images/blog/deep-dive-into-starknet-tx-call-trace/verify_call.png";
import verify_function_call from "@/images/blog/deep-dive-into-starknet-tx-call-trace/verify_function_call.png";
import calculation_proof_execution_flow from "@/images/blog/deep-dive-into-starknet-tx-call-trace/calculation_proof_execution_frame.png";
import send_token_call from "@/images/blog/deep-dive-into-starknet-tx-call-trace/send_token_call.png";
import send_token_function_call from "@/images/blog/deep-dive-into-starknet-tx-call-trace/send_token_function_call.png";

import type { Metadata } from "next";
import Link from "next/link";
import { Screenshot } from "@/app/components/screenshot";

export const metadata: Metadata = {
  title: "Deep Dive into Starknet Transaction Call Trace",
  description:
    "On Starknet, every transaction represents the execution of a Cairo program, uniquely identified by a transaction hash. A Call Trace offers a detailed breakdown of each execution, capturing invoked functions, arguments, and outputs—making it an essential tool for understanding transaction behavior",
};

export default function Blog() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">Tuesday, January 14, 202</Subheading>
        <Heading as="h1" className="mt-2">
          Deep Dive into Starknet Transaction Call Trace
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
                          On Starknet, transactions represent the execution of
                          programs written in the Cairo programming language.
                          Each transaction (or program execution) is identified
                          by a unique transaction hash, making it traceable and
                          distinguishable. For instance, running the same
                          program twenty times will result in twenty unique
                          transactions, each with its own transaction hash. Like
                          any program execution, the behavior of these
                          transactions can be analyzed through a Call Trace, a
                          detailed log that captures the functions invoked, the
                          arguments passed, the outputs returned, and more. For
                          developers, Call Traces are essential for
                          understanding program execution, identifying issues,
                          and optimizing performance. In this post, we will go
                          through an example Call Trace of a Starknet
                          Transaction line by line to better explain how it
                          works in detail.
                        </p>

                        <h2>Specifics of Starknet Call Traces</h2>
                        <p>
                          As mentioned in the introduction, Starknet transaction
                          execution can be represented using a traditional Call
                          Trace, as it reflects the execution of a program.
                          Unlike traditional program execution, where all
                          function calls are treated uniformly, there are
                          differences that result in the structure of the Call
                          Trace. These differences arise from the existence of
                          multiple types of calls within a transaction. These
                          include calls made within a single smart contract and
                          calls to other smart contracts. To distinguish between
                          these, the Call Trace component in Walnut includes
                          Chips that specify the type of each call (also
                          referred to as frames). A Chip labeled “Call”
                          represents a call to a smart contract, while a Chip
                          labeled “Function” denotes a regular function call
                          within a contract. For a complete reference of call
                          types, see the{" "}
                          <a
                            href="https://docs.walnut.dev/call-trace-types"
                            target="_blank"
                          >
                            Call Trace Types documentation
                          </a>
                          .
                        </p>

                        <h2>
                          Understanding a Starknet Call Trace Step by Step
                        </h2>
                        <p className="p-6 bg-gray-50/90">
                          💡 Note: in this example, we use an INVOKE
                          transaction, which is the most common type of
                          transaction on Starknet. There are other types of
                          transactions, such as DEPLOY_ACCOUNT or DECLARE, where
                          the initial function calls are different. For more
                          details on other types of transactions, please refer
                          to the{" "}
                          <a
                            href="https://docs.starknet.io/architecture-and-concepts/accounts/account-functions/"
                            target="_blank"
                          >
                            official documentation
                          </a>
                          .
                        </p>
                        <figure>
                          <Screenshot
                            src={full_call_trace}
                            alt="Full Call Trace of an example transaction on Starknet"
                            width={1300}
                            height={742}
                          />
                          <figcaption>
                            Full Call Trace of an example transaction on
                            Starknet
                          </figcaption>
                        </figure>
                        <p>
                          Let&apos;s now walk through a real-world example of a
                          transaction on Starknet. You can see a full Call Trace
                          in the screenshot above. Below, we break the trace
                          down into multiple screenshots, each representing a
                          logical part of the trace, and explain each part step
                          by step. If you want to explore the trace yourself,
                          you can open it on Walnut with this{" "}
                          <a
                            href="https://app.walnut.dev/transactions?chainId=SN_MAIN&txHash=0x07bb1d7f7a1c496347475e24e9156edc92640d37bb488cf9181f551a89a37aa2"
                            target="_blank"
                          >
                            link
                          </a>
                          .
                        </p>
                        <p className="p-6 bg-gray-50/90">
                          💡 Note: each line in a Call Trace is called a
                          “Frame”. That&apos;s the term we will use throughout
                          the following post.
                        </p>

                        <h3>Initial Frames: Argent Account Interaction</h3>

                        <p>
                          Every INVOKE transaction on Starknet starts from an
                          Account Contract, thanks for Starknet&apos;s
                          implementation of{" "}
                          <a
                            href="https://docs.starknet.io/architecture-and-concepts/accounts/introduction/#account_abstraction"
                            target="_blank"
                          >
                            native account abstraction
                          </a>
                          .
                        </p>
                        <p>
                          The very first function the account calls is the
                          __validate__ function.
                        </p>
                        <h4>Validation Frame: __validate__</h4>
                        <figure>
                          <Screenshot
                            src={__validate__}
                            alt="__validate__"
                            width={1300}
                            height={742}
                          />
                          <figcaption>__validate__</figcaption>
                        </figure>
                        <p>
                          The __validate__ function is the initial validation
                          frame of each INVOKE transaction on Starknet. This
                          function is designed to ensure that the transaction
                          meets the criteria set by the account contract, before
                          it proceeds to the actual program execution.
                        </p>
                        <p>
                          In our transaction example, as shown in the Call Trace
                          above, the __validate__ function performs the
                          following:
                        </p>
                        <ul>
                          <li>
                            <strong>Calldata Deserialization:</strong> The
                            transaction data, or calldata, is deserialized to
                            prepare it for further validation and processing.
                            Calldata is the information sent from an external
                            caller to the contract, and it contains all the
                            necessary parameters required for executing the
                            transaction.
                          </li>
                          <li>
                            <strong>Signature Validation:</strong> The function
                            verifies the caller&apos;s signature, ensuring that
                            only authorized accounts can initiate the
                            transaction.
                          </li>
                        </ul>
                        <p>
                          It&apos;s worth noting that the exact implementation
                          of __validate__ is flexible and up to the Account
                          provider (in our example, Argent), and permissions or
                          signature validation may not always be required. The
                          purpose of this function is to confirm that the
                          transaction aligns with the account&apos;s defined
                          rules. Each Account Contract on Starknet is required
                          to implement the __validate__ method. You can read
                          more here.
                        </p>
                        <p>
                          If __validate__ asserts, the transaction is REJECTED
                          and does not proceed further.
                        </p>

                        <h4>Execution Frame: __execute__</h4>
                        <figure>
                          <Screenshot
                            src={__execute__}
                            alt="__execute__"
                            width={1300}
                            height={742}
                          />
                          <figcaption>__execute__</figcaption>
                        </figure>

                        <p>
                          Once __validate__ passes, the __execute__ function is
                          invoked with the same Calldata. This is the stage
                          where the core actions of transaction are performed:
                        </p>
                        <ul>
                          <li>
                            <strong>Calldata Deserialization:</strong> Just as
                            in the validation phase, calldata is prepared for
                            use in the core transaction logic.
                          </li>
                          <li>
                            <strong>Multicall Execution:</strong> After
                            deserialization phase, it moves on to multicall.
                            Starknet supports native multicall functionality
                            through __execute__, allowing a single transaction
                            to perform multiple actions within the same contract
                            or across different contracts. This capability is
                            unique to Starknet, as Ethereum requires separate
                            contracts to implement similar functionality. For
                            more information on how multicalls work in Starknet,
                            refer to{" "}
                            <a
                              href="https://book.starknet.io/zh-cn/ch04-05-01-multicaller.html"
                              target="_blank"
                            >
                              Starknet documentation
                            </a>
                            .
                          </li>
                        </ul>
                        <h3>Execution Flow of get_beer():</h3>
                        <figure>
                          <Screenshot
                            src={get_beer_execution_flow}
                            alt="get_beer() execution flow"
                            width={1300}
                            height={742}
                          />
                          <figcaption>get_beer() execution flow</figcaption>
                        </figure>
                        <p>
                          After successfully passing the validation phases,
                          get_beer() is called through Starknet&apos;s multicall
                          functionality. The multicall process is managed by the
                          execute_multicall() function, which iterates over each
                          call provided in the transaction&apos;s calldata. For
                          each call, execute_multicall() uses the
                          call_contract_syscall() function to pass the target
                          contract address, the entrypoint selector, and any
                          parameters required by the function - in this case,
                          the get_beer() function on the IBeer2 contract.
                        </p>
                        <p>
                          An entrypoint is a function in a contract that can be
                          called externally, allowing external entities to
                          interact with the contract. For a deeper dive into
                          entrypoints, you can refer to the{" "}
                          <a
                            href="https://book.cairo-lang.org/ch15-01-contract-class-abi.html"
                            target="_blank"
                          >
                            definition
                          </a>
                          .
                        </p>
                        <p>
                          An entrypoint selector (or function selector) is a
                          unique identifier that specifies the exact function to
                          call within a contract.
                        </p>
                        <div className="p-6 bg-gray-50/90">
                          <p>
                            💡 In the Call Trace on Walnut, it&apos;s common to
                            see both an entrypoint Call (in green) and a
                            corresponding Function call (in purple) for the same
                            operation:
                          </p>
                          <ul>
                            <li>
                              <code>IBeer2.get_beer(age_roof)-&gt;()</code>{" "}
                              represents the external Call made to the{" "}
                              <code>IBeer2</code> contract.
                            </li>
                            <li>
                              <code>
                                IBeer2Impl::get_beer(ContractState: None,
                                AgeProof: [3224123, 29]) -&gt;
                                (PanicResult&lt;(ContractState, ())&gt;: [0, 0,
                                0])
                              </code>{" "}
                              represents the actual logic that is executed
                              internally within the contract.
                            </li>
                          </ul>
                          <p>
                            This distinction helps to trace the flow from
                            external requests to internal execution, ensuring
                            full transparency. The entrypoint initiates the
                            call, while the function implements the actual
                            contract logic.
                          </p>
                        </div>

                        <h3>Nested Contract Calls</h3>
                        <p>
                          Next up, the get_beer() calls another contract,
                          IVerifier via its verify() entrypoint. This verify()
                          method is part of an internal logic of the IBeer2
                          contract, and you can see the full source code here.
                        </p>
                        <figure>
                          <Screenshot
                            src={verify_call}
                            alt="verify() entrypoint"
                            width={1300}
                            height={742}
                          />
                          <figcaption>verify() entrypoint</figcaption>
                        </figure>
                        <p>
                          Similar to the get_beer() flow, this contract call
                          involves both an entrypoint and a function call
                          internally.
                        </p>
                        <h4>Function calls inside verify()</h4>
                        <p>
                          Inside the verify() call, you&apos;ll notice multiple
                          function calls, such as:
                        </p>
                        <figure>
                          <Screenshot
                            src={verify_function_call}
                            alt="verify function calls"
                            width={1300}
                            height={742}
                          />
                          <figcaption>Verify Function calls</figcaption>
                        </figure>
                        <p>
                          Each of this function frames represent the specific
                          operations executed as part of the verify() function
                          logic, showcasing the detailed internal operations.
                        </p>
                        <h3>
                          Further Nested Contract Calls: Proof Calculation
                        </h3>
                        <figure>
                          <Screenshot
                            src={calculation_proof_execution_flow}
                            alt="calculation_proof() execution flow"
                            width={1300}
                            height={742}
                          />
                          <figcaption>
                            calculation_proof() execution flow
                          </figcaption>
                        </figure>
                        <p>
                          The calculation_proof() entrypoint on the
                          IVerificationHelper contract is invoked to calculate
                          the proof. Internally, the corresponding function
                          handles the actual calculation logic, ensuring the
                          correctness of the proof before the transaction
                          continues.
                        </p>
                        <p>
                          Here, the calculation_proof() function is actually a
                          contract call. While it looks like a simple function
                          call, it&apos;s interacting with the
                          IVerificationHelper contract, which contains logic to
                          calculate and verify the provided proof.
                        </p>
                        <p>
                          Since calculation_proof() is a contract call, it
                          means:
                        </p>
                        <ul>
                          <li>
                            This implementations lives in another contract
                            (IVerificationHelper).
                          </li>
                          <li>
                            The proof calculation happens within this helper
                            contract, ensuring the integrity of the result
                            before proceeding.
                          </li>
                        </ul>
                        <h3>Final Frame: Token Transfer</h3>
                        <p>The trace ends with a token transfer operation:</p>
                        <figure>
                          <Screenshot
                            src={send_token_call}
                            alt="send_token() entrypoint"
                            width={1300}
                            height={742}
                          />
                          <figcaption>send_token() entrypoint</figcaption>
                        </figure>
                        <h4>Function calls inside send_token()</h4>
                        <p>
                          Inside the send_token() contract call, the trace shows
                          several internal operations:
                        </p>
                        <figure>
                          <Screenshot
                            src={send_token_function_call}
                            alt="send_token function calls"
                            width={1300}
                            height={742}
                          />
                          <figcaption>Send Token Function calls</figcaption>
                        </figure>
                        <p>
                          These operations handle mathematical calculations
                          (e.g., for token balances) and state updates (e.g.,
                          updating the recipient&apos;s token balance in
                          storage).
                        </p>
                        <h3>Summary</h3>
                        <p>
                          This transaction walkthrough illustrated how each
                          phase relies on a combination of entrypoints and
                          internal function calls. The __validate__ and
                          __execute__ functions ensure the transaction&apos;s
                          security and execution, while subsequent entrypoints
                          handle specific contract operations. Entrypoints
                          manage the initial external interactions, and function
                          calls handle the detailed internal logic. This
                          structure provides a complete, traceable path from the
                          start of a request to the completion of its internal
                          execution.
                        </p>
                        <h2>Conclusion</h2>
                        <p>
                          A Call Trace is a detailed record of a program&apos;s
                          execution, providing a comprehensive view of how a
                          transaction unfolds within the network. Call Traces
                          help developers and auditors understand exactly what
                          happened during a transaction. Here&apos;s why they
                          matter:
                        </p>
                        <ul>
                          <li>
                            <strong>Debugging Made Easy:</strong> If a
                            transaction fails, the Call Trace shows which
                            function failed and why - making it easier to fix
                            bugs.{" "}
                          </li>
                          <li>
                            <strong>Transparency and Security:</strong> Every
                            function call, input, and result is logged, making
                            it easier to audit transactions and ensure
                            compliance with the expected logic.{" "}
                          </li>
                        </ul>
                        <p>
                          Call Traces are the key to understanding what happens
                          inside Starknet transactions. They tell the complete
                          story - from __validate__ to __execute__.
                        </p>
                        <p>
                          Whether you&apos;re debugging a transaction, or
                          auditing your smart contracts, Call Traces provide the
                          insights you need to dive deep and understand every
                          step of the process.{" "}
                        </p>
                        <p>
                          Next time you&apos;re working on a Starknet project,
                          don’t forget to check the{" "}
                          <a href="https://app.walnut.dev/" target="_blank">
                            Walnut
                          </a>{" "}
                          - it&apos;s your roadmap to everything happening under
                          the hood.
                        </p>
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
      <Footer />
    </main>
  );
}
