import { Heading, Subheading } from "./text"

const featuredTestimonial = {
  body: 'Transaction Debugging and Simulations are a big missing piece on Starknet, so it’s great to see Walnut providing developers with these essential tools.',
  author: {
    name: 'Ariel Elperin',
    twitter: 'FeedTheFed',
    imageUrl:
      '/testimonials/ariel.jpg',
    logoUrl: '/testimonials/starkware.jpg',
    profileUrl: 'https://x.com/feedthefed'
  },
}
const testimonials = [
  [
    [
      {
        body: 'Debugger and transaction simulator is a big missing piece in Starknet. At Argent, we are excited that this gap is being filled with Walnut.',
        author: {
          name: 'Sergio Garcia',
          position: 'Cairo Developer at',
          company: 'Argent',
          companyUrl: 'https://www.argent.xyz',
          imageUrl:
            '/testimonials/garcia.jpeg',
        },
      },
      {
        body: 'Debugging or simulating transactions is an absolutely critical task for any on-chain developer. We cannot wait to have Walnut integrated with Karnot and Madara Appchains.',
        author: {
          name: 'Apoorv Sadana',
          position: 'CEO at',
          company: 'Karnot, Appchain Wiz 🧙‍♂️',
          companyUrl: 'https://www.karnot.xyz/',
          imageUrl:
            '/testimonials/sadana.jpg',
        },
      },
      {
        body: 'Debugging transactions and performance monitoring are pain points on Starknet today. Every DeFi protocol builder woud benefit from better tooling, and it’s great to see Walnut addressing this need.',
        author: {
          name: 'Vukašin Manojlović',
          position: 'DEFI developer at',
          company: 'Nostra',
          companyUrl: 'https://nostra.finance/',
          imageUrl:
            '/testimonials/manojlovic.jpeg',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'I think Walnut is very important and that you [the Walnut team] are doing very valuable work for Starknet.',
        author: {
          name: 'Amanusk',
          position: 'Devtools at',
          company: 'Starkware',
          companyUrl: 'https://starkware.co/',
          imageUrl:
            '/testimonials/amanusk.jpg',
        },
      },
      {
        body: 'Walnut is an essential tool for debugging complex transactions with nested calls and large amounts of calldata. Walnut helped me with a massive blocker on the Bitcoin inscriptions project. 🌰',
        author: {
          name: 'Lana Ives',
          position: 'Exploration at',
          company: 'Starkware',
          companyUrl: 'https://starkware.co/',
          imageUrl:
            '/testimonials/lana-ives.jpg',
          profileUrl: 'https://x.com/tx_track?lang=en'
          
        },
      },
    ],
  ],
  [
    [
      {
        body: 'At Cartridge, we see a lot of interest in transaction debugging and simulation. Walnut has the potential to become a critical tool for game developers building on Starknet.',
        author: {
          name: 'tarrence v',
          position: 'CEO at',
          company: 'Cartridge',
          companyUrl: 'https://cartridge.gg/',
          imageUrl:
            '/testimonials/tarrence.jpeg',
        },
      },
      {
        body: 'With Enso, we are not yet on Starknet. However, seeing a debugger and simulator like Walnut is a great testament to Starknet’s maturing devtools ecosystem, making it more appealing to new developers. We need a debugger and simulator to ship anything on Starknet, as we rely on this tooling in all EVM ecosystems and cannot build without it.',
        author: {
          name: 'Connor',
          position: 'CEO at',
          company: 'Enso Finance',
          companyUrl: 'https://www.enso.finance/',
          imageUrl:
            '/testimonials/connor.jpg',
        },
      },
    ],
    [
      {
        body: 'We are thrilled about the Walnut integration with Dojo. Step-by-step debugging with instant replay of transactions will be another string to the bow for all the sensei building on Dojo.',
        author: {
          name: 'Glihm',
          position: 'Lead dev at',
          company: 'Dojo',
          companyUrl: 'https://www.dojoengine.org/',
          imageUrl:
            '/testimonials/glihm.jpg',
        },
      },
      {
        body: 'At Nimbora, we are big supporters of Walnut and the transaction debugger and simulator for Starknet. We are looking forward to using it with Nimbora and integrating it with Devnet and Rivet, our new developer-focused wallet.',
        author: {
          name: 'Edi Sinovčić',
          position: 'CEO at',
          company: 'Spaceshard',
          companyUrl: 'https://www.spaceshard.io/',
          imageUrl:
            '/testimonials/edi.jpg',
        },
      },
      {
        body: 'Had to debug an OpenZeppelin tx on Starknet Sepolia—Walnut made it *way* too easy. Lifesaver!',
        author: {
          name: 'Adam Borco',
          position: 'Co-founder of',
          company: 'Atomiq Labs',
          companyUrl: 'https://x.com/atomiqlabs?lang=en',
          imageUrl:
            '/testimonials/adam-borco.jpg',
          profileUrl: 'https://x.com/AdamBorco'
          
        },
      },

    ],

  ],
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
  return (
    <div className="relative isolate pb-32 pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Testimonials</Subheading>
          <Heading className="text-3xl/[1.2]">
            Developers love Walnut
          </Heading>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <a target="_blank" className="hover:underline" href={featuredTestimonial.author.profileUrl}>
                  <div className="font-semibold">{featuredTestimonial.author.name}</div>
                </a>
                <a target="_blank" className="hover:underline" href={featuredTestimonial.author.profileUrl}>
                  <div className="text-gray-600">{`@${featuredTestimonial.author.twitter}`}</div>
                </a>
              </div>
              <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none" />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.position}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className=" text-sm/6 text-gray-600 group-data-[dark]:text-gray-400">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img alt="" src={testimonial.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                        <div>
                          {testimonial.author.profileUrl? <a href={testimonial.author.profileUrl} className="font-semibold hover:underline">{testimonial.author.name}</a> : 
                          <div className="font-semibold">{testimonial.author.name}</div>}
                          <div className="text-gray-600">{`${testimonial.author.position}`}
                            <span>
                            {' '}
                              <a target="_blank" className="text-blue-500 hover:underline" href={testimonial.author.companyUrl}>{testimonial.author.company}</a>
                              </span>
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
