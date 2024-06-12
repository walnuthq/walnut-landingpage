'use client'

import { useId, useState } from 'react'
import { Button } from './Button'



export function SignUpForm() {
  let id = useId()

  const [isSignedUp, setIsSignedUp] = useState(false)

  async function onSubmit() {
      setTimeout(() => {
          setIsSignedUp(true);
      }, 10);
  }

  return (
    <form action="https://joinwido.us1.list-manage.com/subscribe/post?u=519a9433ee6834f49d94686d9&amp;id=f836ce2ed8&amp;f_id=00d49de5f0"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_blank"
    onSubmit={onSubmit} className="relative isolate mt-8 flex items-center pr-1">
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        required
        type="email"
        autoComplete="email"
        name="email"
        id={id}
        placeholder="Email address"
        className="peer w-0 border-none focus:ring-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
      />
      <Button type="submit" arrow>
        Get updates
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-[#e93281]/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-[#e93281]" />
    </form>
  )
}
