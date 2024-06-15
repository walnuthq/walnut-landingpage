'use client'
import { Events, Link } from 'react-scroll';
import { useEffect } from 'react';

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  useEffect(() => {
    const updateHash = (hash: string) => {
      const currentUrl = new URL(window.location.href);
      currentUrl.hash = hash;
      window.history.pushState(null, '', currentUrl.toString());
    };

    Events.scrollEvent.register('end', (to, element) => {
      updateHash(to);
    });

    return () => {
      Events.scrollEvent.remove('end');
    };
  }, []);
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