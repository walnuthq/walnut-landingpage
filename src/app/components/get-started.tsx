
import { Button } from './button'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'
function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <hgroup>
        <Subheading className='!text-BLUE' dark>Get started</Subheading>
        <Heading as="h2" dark className="mt-6 text-3xl/[1.2] font-medium tracking-tight text-gray-950 sm:text-5xl">
        Ready to Debug Cairo?
          <br />
          Start for free today.
        </Heading>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-GREY-2">
        Unlock the tools you need to debug, simulate, and optimize your Starknet Smart Contracts.
      </p>
      <div className="mt-6">
          <Button variant="primary" className="w-full sm:w-auto" href="https://app.walnut.dev" target="_blank" rel="noopener noreferrer"
                  aria-label="Get started for Free">Get started for Free</Button>

      </div>
    </div>
  )
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-400">{children}</h3>
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-white data-[hover]:text-gray-300/75"
      />
    </li>
  )
}






export function GetStarted() {
  return (
    <footer>
      <div className="relative bg-BLACK-2">
        <div className="absolute inset-2 " />
        <Container>
          <CallToAction/>
        </Container>
      </div>
    </footer>
  )
}
