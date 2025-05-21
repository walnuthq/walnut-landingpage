
import { Button } from './button'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'
function CallToAction() {
  return (
    <div className="relative pt-20 text-center sm:pt-[8rem] ">
      <hgroup>
        <Subheading className='!text-BLUE' dark>Get started</Subheading>
        <Heading as="h2" className="mt-6 text-3xl/[1.2] font-medium tracking-tight text-BLACK sm:text-5xl mx-auto text-center">
        Ready to Debug Cairo?
          <br />
          Start for free today.
        </Heading>
      </hgroup>
      <p className="mx-auto mt-[1.9rem] max-w-xs text-sm/6 text-GREY-2">
        Unlock the tools you need to debug, simulate, and optimize your Starknet Smart Contracts.
      </p>
      <div className="mt-[1.9rem]">
          <Button variant="primary" className="w-full sm:w-auto" href="https://app.walnut.dev" target="_blank" rel="noopener noreferrer"
                  aria-label="Get started for Free">Get started for Free</Button>

      </div>
    </div>
  )
}

export function GetStarted() {
  return (
    <footer>
      <div className="relative bg-slate-50">
        <div className="absolute inset-2 " />
        <Container>
          <CallToAction/>
        </Container>
      </div>
    </footer>
  )
}
