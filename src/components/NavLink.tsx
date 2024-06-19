'use client'
import { Events, Link } from 'react-scroll';
import { useRouter } from 'next/navigation';

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const router = useRouter();
  return (
    <Link
      to={href}
      className="cursor-pointer inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      spy={true}
      smooth={true}
      offset={50}
      duration={100}
      onClick={() => router.push(`#${href}`)}
    >
      {children}
    </Link>
  )
}