'use client'
import { Link } from 'react-scroll';

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      to={href}
      className="cursor-pointer inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      {children}
    </Link>
  )
}
