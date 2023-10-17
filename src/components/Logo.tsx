import Image from 'next/image'

import logoWalnut from '@/images/logos/walnut.svg'

export function Logo(props: React.ComponentPropsWithoutRef<'img'>) {
  return (
    <Image src={logoWalnut} alt="Walnut logo" unoptimized {...props} />
  )
}
