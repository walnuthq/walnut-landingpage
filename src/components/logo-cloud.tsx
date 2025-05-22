import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className='flex lg:flex-row flex-col justify-between items-center'>
      <div className='text-BLUE mb-6 lg:mb-0'>
        Trusted by the best.
      </div>
      <div
        className={clsx(
          className,
          'flex justify-between gap-[6rem] max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
        )}
      >
        <img
          alt="StarknetLogo"
          src="/logo-cloud/Starknet_Logo.svg"
          className="max-sm:mx-auto h-[1.8rem] self-center"
        />
        <img
          alt="Starkware"
          src="/logo-cloud/StarkWare_Logo.png"
          className="max-sm:mx-auto h-[1.6rem] self-center"
        />
        <img
          alt="Argent Wallet Logo"
          src="/logo-cloud/Argent_Wallet_Logo.png"
          className="max-sm:mx-auto h-[2.75rem] self-center"
        />
        <img
          alt="Dojo"
          src="/logo-cloud/Dojo_Logo_Starknet.png"
          className="max-sm:mx-auto h-[2.75rem] lg:h-14"
        />
        <img
          alt="CF"
          src="/logo-cloud/Vesu_Logo.png"
          className="max-sm:mx-auto h-[1rem] self-center"
        />
      </div>
    </div>

  )
}
