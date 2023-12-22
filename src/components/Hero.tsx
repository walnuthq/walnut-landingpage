import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoYearn from '@/images/logos/yearn.svg'
import logoJediswap from '@/images/logos/jediswap.svg'
import logoCarmine from '@/images/logos/carmine_finance.png'
import logoCompound from '@/images/logos/compound.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Finally a Debugger Starknet Deserves
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Delve deeper into Cairo transaction execution, swiftly identifying bugs and pinpointing areas for improvement.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/#request-access">Request early access</Button>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          From the <Link className='underline' href='https://joinwido.com/' target='_blank' aria-label='Wido home page'>Wido team</Link>, trusted by
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Yearn', logo: logoYearn, classNameExt: 'opacity-90' },
              { name: 'JediSwap', logo: logoJediswap, classNameExt: 'opacity-90' },
            ],
            [
              { name: 'Compound', logo: logoCompound, classNameExt: '' },
              { name: 'Carmine Finance', logo: logoCarmine, classNameExt: 'opacity-90' },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized className={`h-9 w-auto ${company.classNameExt}`} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
