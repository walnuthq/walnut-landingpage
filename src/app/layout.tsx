import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import Script from 'next/script'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

const lexend = Lexend({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-lexend',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={clsx('h-full scroll-smooth bg-white antialiased', inter.variable, lexend.variable)}>
			<head>
			<link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-3C2NZTCV18" />
			<Script id="google-analytics">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-3C2NZTCV18');
          `}
			</Script>
			</head>

			<body className="flex h-full flex-col bg-gray-950">
				<div className="text-gray-950 antialiased ">{children}</div>
			</body>
		</html>
	)
}
