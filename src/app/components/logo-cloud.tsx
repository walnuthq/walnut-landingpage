import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className='flex lg:flex-row flex-col justify-between items-center'>
      <div className='text-BLUE mb-6 md:mb-0'>
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
          className="max-sm:mx-auto h-7 lg:h-9 self-center"
        />
        <img
          alt="Starkware"
          src="/logo-cloud/StarkWare_Logo.png"
          className="max-sm:mx-auto h-6 lg:h-8 self-center"
        />
        <img
          alt="Argent Wallet Logo"
          src="/logo-cloud/Argent_Wallet_Logo.png"
          className="max-sm:mx-auto h-12 lg:h-14 self-center"
        />
        <img
          alt="Dojo"
          src="/logo-cloud/Dojo_Logo_Starknet.png"
          className="max-sm:mx-auto h-10 lg:h-14"
        />
        <img
          alt="CF"
          src="/logo-cloud/Vesu_Logo.png"
          className="max-sm:mx-auto h-4 lg:h-6 self-center"
        />
      </div>
    </div>

  )
}
