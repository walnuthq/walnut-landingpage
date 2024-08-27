
export default function CallToAction() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Transaction Debugger selected as a top <br /> missing feature by developers.
                </h2>
                <div className="text-xl sm:text-2xl mt-12">
                  Recent study by Starknet, a leading ZK rollup, revealed that transaction debugger, simulator and profiler is the most requested feature from Starknet developers.
                </div>
            </div>

          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a href="https://www.starknet.io/blog/cairo-gets-high-marks-from-starknet-devs-heres-why/#what-should-we-build-next?" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  