import { NextResponse } from 'next/server'

export const runtime = 'edge'

const isValidEmail = (email: string): boolean => /^\S+@\S+\.\S+$/.test(email)

export async function POST(req: Request) {
	try {
		const { email } = await req.json()

		if (!isValidEmail(email)) throw new Error('invalid email')

		const res = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
			},
			body: JSON.stringify({
				from: 'Acme <onboarding@resend.dev>',
				to: [email],
				subject: 'Welcome to Walnut - You are Onboard!',
				html: `<div>
							<h1>Welcome to Walnut,</h1>
							<p>Thank you for signing up! Our team is working to bring you updates on the Starknet & Cairo debugger.</p>
							<p>
								Stay tuned for exciting updates. For queries, write to us at <a href="mailto:support@walnut.com">support@walnut.com</a>.
							</p>
							<p>Best Regards,</p>
							<p>The Walnut Team</p>
						</div>`,
			}),
		})

		if (!res.ok) throw new Error(`Error: status ${res.status}`)
		const data = await res.json()
		return NextResponse.json({ success: !!data.id })
	} catch (error) {
		return NextResponse.json({ error })
	}
}
