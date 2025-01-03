import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className='flex  md:flex-row flex-col justify-between items-center'>
      <div className='text-gray-500 mb-8 md:mb-0'>
        Trusted by the best.
      </div>
      <div
        className={clsx(
          className,
          'flex justify-between gap-12 max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
        )}
      >
        <img
          alt="StarknetLogo"
          src="/logo-cloud/Starknet_Logo.svg"
          className="h-9 max-sm:mx-auto sm:h-6 lg:h-10 self-center"
        />
        <img
          alt="Starkware"
          src="/logo-cloud/StarkWare_Logo.png"
          className="h-9 max-sm:mx-auto sm:h-6 lg:h-8 self-center"
        />
        <img
          alt="Argent Wallet Logo"
          src="/logo-cloud/Argent_Wallet_Logo.png"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-16"
        />
        <img
          alt="Dojo"
          src="/logo-cloud/Dojo_Logo_Starknet.png"
          className="h-9 max-sm:mx-auto sm:h-8 lg:h-16"
        />
        <img
          alt="CF"
          src="/logo-cloud/Vesu_Logo.png"
          className="h-9 max-sm:mx-auto sm:h-4 lg:h-6 self-center"
        />
      </div>
    </div>

  )
}
