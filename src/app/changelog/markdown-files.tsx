import expressionFunctionCallDetailsDebugger from "./posts/expression-function-call-details-debugger.md";
import upgradeDependencies from "./posts/upgrade-dependencies.md";
import newSimualationPage from "./posts/new-simualation-page.md";
import sourceFileOrganization from "./posts/source-file-organization.md";
import l1HandlerTx from "./posts/l1_handler_tx.md";
import breakpoints from "./posts/breakpoints.md";
import nativeData from "./posts/native-data.md";
import enumDecoded from "./posts/enum-decoded.md";
import callTracePreview from "./posts/call-trace-preview.md";
import stackError from "./posts/stack-error.md";
import eventTab from "./posts/event-tab.md";
import sozoVerify from "./posts/sozo-verify.md";
import release from "./posts/release.md";
import signUp from "./posts/sign-up.md";
import scarbDownloader from "./posts/scarb-downloader.md";
import bugFixes from "./posts/bug-fixes.md";
import loopRemovalFromCallTrace from "./posts/loop-removal-from-call-trace.md";
import newVerification from "./posts/new-verification.md";
import functionCallDetails from "./posts/function-call-details.md";
import classPage from "./posts/class-page.md";
import argsResSimplification from "./posts/args-res-simplification.md";
import stepOver from "./posts/step-over.md";
import homePageHeader from "./posts/home-page-header.md";
import searchCallTrace from "./posts/search-call-trace.md";
import searchImprovment from "./posts/search-improvment.md";
import expandCollapseInTrace from "./posts/expand-collapse-in-trace.md";
import multipleVerificationImprovments from "./posts/multiple-verification-improvments.md";
import debugContractCallPage from "./posts/debug-contract-call-page.md";
import newSettingsPage from "./posts/new-settings-page.md";
import verificationStatusApi from "./posts/verification-status-api.md";
import codeAttributeHighlight from "./posts/code-attribute-highlight.md";
import aggregatedSearch from "./posts/aggregated-search.md";
import sourceFileSwitchDebugInfo from "./posts/source-file-switch-debug-info.md";
import transactionPageAdditionalInformation from "./posts/transaction-page-additional-information.md";
import contractCallsInInternalTrace from "./posts/contract-calls-in-internal-trace.md";
import nudgePeopleToVerify from "./posts/nudge-people-to-verify.md";
import internalFnCallPanic from "./posts/internal-fn-call-panic.md";
import argumentsAndResultValues from "./posts/arguments-and-result-values.md";
import verificationApi from "./posts/verification-api.md";
import debuggerLaunch from "./posts/debugger-launch.md";
import sourceCodeIntroduction from "./posts/source-code-introduction.md";
import transactionSimulationIntroduction from "./posts/transaction-simulation-introduction.md";
import callTraceInternal from "./posts/call-trace-internal.md";
import initialPost from "./posts/initial-post.md";
import brandNewStorageTab from "./posts/brand-new-storage-tab.md";
import focusOnStability from "./posts/focus-on-stability.md";
import soueceCodeFiles from "./posts/source-code-files-organization.md";
import gasConsumption from "./posts/gas-consumption-in-the-call-trace.md";
import callTraceSierraGas from "./posts/call-trace-sierra-gas-in-failed-transactions.md";
import flamecharts from "./posts/flamecharts.md";
import newLogo from "./posts/new-logo.md";
import gasChipAlwaysPresent from "./posts/gas-chip-always-present.md";

export const markdownFiles = [
  {
    slug: "gas-chip-always-present",
    content: gasChipAlwaysPresent,
  },
  {
    slug: "new-logo",
    content: newLogo,
  },
  {
    slug: "flamecharts",
    content: flamecharts,
  },
  {
    slug: "call-trace-sierra-gas-in-failed-transactions",
    content: callTraceSierraGas,
  },
  {
    slug: "gas-consumption-in-the-call-trace",
    content: gasConsumption,
  },
  {
    slug: "source-code-files-organization",
    content: soueceCodeFiles,
  },
  {
    slug: "focus-on-stability",
    content: focusOnStability,
  },
  {
    slug: "brand-new-storage-tab",
    content: brandNewStorageTab,
  },
  {
    slug: "expression-function-call-details-debugger",
    content: expressionFunctionCallDetailsDebugger,
  },
  { slug: "upgrade-dependencies", content: upgradeDependencies },
  { slug: "new-simualation-page", content: newSimualationPage },
  { slug: "source-file-organization", content: sourceFileOrganization },
  { slug: "l1_handler_tx", content: l1HandlerTx },
  { slug: "breakpoints", content: breakpoints },
  { slug: "native-data", content: nativeData },
  { slug: "enum-decoded", content: enumDecoded },
  { slug: "call-trace-preview", content: callTracePreview },
  { slug: "stack-error", content: stackError },
  { slug: "event-tab", content: eventTab },
  { slug: "sozo-verify", content: sozoVerify },
  { slug: "release", content: release },
  { slug: "sign-up", content: signUp },
  { slug: "scarb-downloader", content: scarbDownloader },
  { slug: "bug-fixes", content: bugFixes },
  { slug: "loop-removal-from-call-trace", content: loopRemovalFromCallTrace },
  { slug: "new-verification", content: newVerification },
  { slug: "function-call-details", content: functionCallDetails },
  { slug: "class-page", content: classPage },
  { slug: "args-res-simplification", content: argsResSimplification },
  { slug: "step-over", content: stepOver },
  { slug: "home-page-header", content: homePageHeader },
  { slug: "search-call-trace", content: searchCallTrace },
  { slug: "search-improvment", content: searchImprovment },
  { slug: "expand-collapse-in-trace", content: expandCollapseInTrace },
  {
    slug: "multiple-verification-improvments",
    content: multipleVerificationImprovments,
  },
  { slug: "debug-contract-call-page", content: debugContractCallPage },
  { slug: "new-settings-page", content: newSettingsPage },
  { slug: "verification-status-api", content: verificationStatusApi },
  { slug: "code-attribute-highlight", content: codeAttributeHighlight },
  { slug: "aggregated-search", content: aggregatedSearch },
  { slug: "source-file-switch-debug-info", content: sourceFileSwitchDebugInfo },
  {
    slug: "transaction-page-additional-information",
    content: transactionPageAdditionalInformation,
  },
  {
    slug: "contract-calls-in-internal-trace",
    content: contractCallsInInternalTrace,
  },
  { slug: "nudge-people-to-verify", content: nudgePeopleToVerify },
  { slug: "internal-fn-call-panic", content: internalFnCallPanic },
  { slug: "arguments-and-result-values", content: argumentsAndResultValues },
  { slug: "verification-api", content: verificationApi },
  { slug: "debugger-launch", content: debuggerLaunch },
  { slug: "source-code-introduction", content: sourceCodeIntroduction },
  {
    slug: "transaction-simulation-introduction",
    content: transactionSimulationIntroduction,
  },
  { slug: "call-trace-internal", content: callTraceInternal },
  { slug: "initial-post", content: initialPost },
];
