import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="StarknetLogo"
        src="/logo-cloud/Starknet Logo.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Starkware"
        src="/logo-cloud/StarkWare Logo.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Argent Wallet Logo"
        src="/logo-cloud/Argent Wallet Logo.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Dojo"
        src="/logo-cloud/Dojo Logo Starknet.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="CF"
        src="/logo-cloud/Carmine Finance Logo.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
    </div>
  )
}
