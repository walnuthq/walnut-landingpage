import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

import logoWalnut from '@/images/logos/walnut.svg'
import Script from 'next/script'



export const metadata: Metadata = {
	title: {
		template: '%s | Walnut',
		default: 'Debugger for Starknet smart contract developers | Walnut',
	},
	description: 'Delve deeper into Cairo transaction execution with our state-of-the-art debugger. Swiftly identify bugs and pinpoint areas for enhancement.',
	keywords: ['Starknet', 'Debugger', 'Cairo', 'Transaction', 'Gas profiler', 'Stack trace', 'Debugging'],
	metadataBase: new URL('https://walnut.dev/'),
	openGraph: {
		title: 'Finally: The Debugger Starknet Deserved',
		description: 'Delve deeper into Cairo transaction execution with our state-of-the-art debugger. Secure your early access now.',
		images: [
			{
				url: logoWalnut.src,
				width: 520,
				height: 160,
				alt: 'Walnut logo',
			},
		],
		locale: 'en_US',
		type: 'website',
		url: 'https://walnut.dev',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Finally: The Debugger Starknet Deserved',
		description: 'Delve deeper into Cairo transaction execution with our state-of-the-art debugger. Secure your early access now.',
		images: [logoWalnut.src],
	},
}

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

			<body className="flex h-full flex-col">
				<div className="text-gray-950 antialiased">{children}</div>
			</body>
		</html>
	)
}
