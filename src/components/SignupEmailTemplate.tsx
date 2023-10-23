import * as React from 'react'

interface EmailTemplateProps {
	// firstName: string
}

// export const SignupEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
export const SignupEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = () => (
	<div>
		<h1>Welcome to Walnut,</h1>
		<p>Thank you for signing up! Our team is working to bring you updates on the Starknet & Cairo debugger.</p>
		<p>
			Stay tuned for exciting updates. For queries, write to us at <a href="mailto:support@walnut.com">support@walnut.com</a>.
		</p>
		<p>Best Regards,</p>
		<p>The Walnut Team</p>
	</div>
)

export const signupEmailPlainText = `Welcome to Walnut, Thank you for signing up! Our team is working to bring you updates on the Starknet & Cairo debugger.
Stay tuned for exciting updates. For queries, write to us at support@walnut.com . Best Regards, The Walnut Team`