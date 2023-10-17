// import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

import { Container } from "./Container";

export function BeforeAfter() {
  return (
    <section
        id="before-after"
        aria-label="What changes with the introduction of Walnet Debugger to the Starknet ecosystem"
        className="bg-slate-900"
    >
        <Container>
            <div className="px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-4xl text-base">
                    <div className="grid grid-cols-2 text-center divide-x">
                        <div className="px-12">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-200">From darkness&hellip;</h2>
                            <p className="mt-6 text-xl leading-8 text-slate-200">
                                As a Starknet developer, you&apos;ve known the abyss. Transactions fail, and you&apos;re left without a clue, navigating through chaos and frustration.
                            </p>
                        </div>
                        <div className="px-12">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-200">&hellip;to clarity</h2>
                            <p className="mt-6 text-xl leading-8 text-slate-200">
                                Transactions demystified. Detailed stack traces, line numbers, gas profiling, and more. Turn debugging from a dreaded task into an insightful process.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Container>
    </section>
  )
}
