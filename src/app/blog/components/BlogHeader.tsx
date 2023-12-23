import Image from 'next/image'

import { Header } from '@/components/Header'

import backgroundImage from '@/images/background-blog.png'

export default function BlogHeader() {
	return <>
		<div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
			<div className="w-[108rem] flex-none flex justify-end">
				<Image
					className="w-[71.75rem] flex-none max-w-none"
					src={backgroundImage}
					alt=""
					width={1558}
					height={946}
					unoptimized
				/>
			</div>
		</div>
		<div className='z-40 backdrop-blur bg-white/60'>
		    <Header condensed />
		</div>
	</>
}
