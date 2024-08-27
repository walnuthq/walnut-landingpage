export default function CallToAction() {
  return (
    <div className="bg-indigo-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transaction Debugger selected as a top <br/> missing feature by developers.
          </h2>
          <div className="mt-12 text-lg sm:text-xl">
            Recent study by Starknet, a leading ZK rollup, revealed that transaction debugger, simulator and profiler is the most requested feature from Starknet developers.
          </div>
        </div>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="https://www.starknet.io/blog/cairo-gets-high-marks-from-starknet-devs-heres-why/#what-should-we-build-next?"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  )
}
