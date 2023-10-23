import { SignupEmailTemplate, signupEmailPlainText } from '@/components/SignupEmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'edge'

const resend = new Resend(process.env.RESEND_API_KEY)

const isValidEmail = (email: string): boolean => /^\S+@\S+\.\S+$/.test(email)

export async function POST(req: Request) {
	try {
		const { email } = await req.json()

		if (!isValidEmail(email)) throw new Error('invalid email')

		const data = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: [email],
			subject: 'Welcome to Walnut - You are Onboard!',
			react: SignupEmailTemplate({}),
			text: signupEmailPlainText,
		})

		return NextResponse.json({ success: !!data.id })
	} catch (error) {
		return NextResponse.json({ error })
	}
}
