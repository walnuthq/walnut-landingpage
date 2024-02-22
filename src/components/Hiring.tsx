import { Container } from './Container'
import WalnutTeam from '@/images/walnut_team.webp'
import Image from 'next/image'

export function Hiring() {
	return (
		<section id="hiring" className="bg-slate-50 py-32">
			<Container>


  <div className="mx-auto max-w-7xl px-6 lg:px-8">
  	<div className="w-full text-center pb-16">
	  	<p className="text-base font-semibold leading-7 text-pink-600">We're hiring</p>
		<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join the Walnut team</h2>
		<p className="mt-6 text-xl leading-8 text-gray-600">Help Starknetians crack bugs in Cairo contracts.</p>
	</div>
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
      <div className="w-full lg:max-w-lg lg:flex-auto">
		<Image className="rounded-xl lg:rounded-3xl" src={WalnutTeam} alt="" />
      </div>
      <div className="w-full lg:max-w-xl lg:flex-auto">
        <h3 className="sr-only">Job openings</h3>
        <ul className="-my-8 divide-y divide-gray-100">
          <li className="py-8">
            <dl className="relative flex flex-wrap gap-x-3">
              <dt className="sr-only">Role</dt>
              <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                <a href="#">
                  Founding engineer
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </dd>
              <dt className="sr-only">Description</dt>
              <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.</dd>
              <dt className="sr-only">Location</dt>
              <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                Remote, Europe
              </dd>
            </dl>
          </li>
          <li className="py-8">
            <dl className="relative flex flex-wrap gap-x-3">
              <dt className="sr-only">Role</dt>
              <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                <a href="#">
                  Open position
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </dd>
              <dt className="sr-only">Description</dt>
              <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.</dd>
              <dt className="sr-only">Location</dt>
              <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                Remote, Europe
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>



			</Container>
		</section>
	)
}
