import { ChevronDownIcon } from "@heroicons/react/16/solid"
import { Container } from "../components/container"
import { GradientBackground } from "./components/gradient"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid"
const topErrors = [
  { name: "Error: 'aotl'", type: 'transaction', events: 8, env: 'Argent', device: 'Mobile' },
  { name: "Error: 'u256_sub Overflow'", type: 'simulation', events: 12, env: 'Avnu', device: 'Web app' },
  { name: "Error: 'Insufficient tokens received'", type: 'transaction', events: 1, env: 'Avnu', device: 'Web app' },
  { name: "Error: 'invariant'", type: 'transaction', events: 8, env: 'Argent', device: 'Mobile' },
  { name: "Error: 'NO_PROFIT'", type: 'simulation', events: 8, env: 'Argent', device: 'Mobile' },
]

export default function Example() {
  return (
    <div>
      <div className="pt-56">

      <GradientBackground />
      </div>
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 ">
          <div className="">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-gray-900">Top errors</h1>
            </div>
            <div className="mt-4  flex gap-5 items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Last week
                  <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Account settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Support
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      License
                    </a>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
            <button
              type="button"
              className="inline-flex items-center gap-x-2 rounded-md px-3 py-2 text-sm font-semibold bg-white text-gray-900  shadow-md hover:bg-indigo-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <AdjustmentsVerticalIcon aria-hidden="true" className="-ml-0.5 size-5" />
              Filter
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                3
              </span>
            </button>
            </div>
          </div>
          <div className="mt-4 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr className="divide-x divide-gray-200">
                      <th scope="col" className="py-3.5 pl-4 pr-4 w-72 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                       
                      </th>
                      <th scope="col" className="px-4 py-3.5 max-w-4 text-left text-sm font-semibold text-gray-900">
                        Events
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Environment
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {topErrors.map((error) => (
                      <tr key={error.events + error.name} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap flex justify-between gap-8 items-center py-1 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                          <span className="inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                              <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-red-500">
                                <circle r={3} cx={3} cy={3} />
                              </svg>
                              {error.name}
                          </span>
                          <div className="font-normal">
                            {error.type}
                          </div>
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm max-w-4 text-gray-900">{error.events}</td>
                        <td className="whitespace-nowrap p-4 flex gap-12 text-sm text-gray-900">
                          <div className="font-semibold ">
                            {error.env}
                          </div>
                            {error.device}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>


  )
}
