import { navlinks } from "./Navlinks";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import clsx from "clsx";

import { Fragment } from "react";
import { Popover, Transition, Menu } from "@headlessui/react";
import { ChevronDownIcon, MenuIcon, UserCircleIcon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const nextRoute = useRouter();
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between px-4 py-6 shadow-lg sm:px-6 md:justify-start md:space-x-10 md:px-24">
            <div>
              <Link href="/food">
                <a className="text-4xl italic font-bold text-brand-600">Zuck</a>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <div className="flex">
                {navlinks.map(({ id, route, name, icon }) => {
                  return (
                    <span key={id} className="hidden ml-8 text-gray-900 lg:flex">
                      <Link href={route}>
                        <a
                          className={clsx("flex font-semibold", {
                            "text-brand-600 ": nextRoute.pathname === route,
                            "text-gray-600": !(nextRoute.pathname === route),
                          })}
                        >
                          {icon} {name}
                        </a>
                      </Link>
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center md:ml-12">
                <Link href="/auth/login">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">Login</a>
                </Link>
                <Link href="/auth/signup">
                  <a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-700">
                    Sign up
                  </a>
                </Link>
                {/* User signed in */}
                {/* <div>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-brand-500 rounded-md bg-opacity-90 hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <UserCircleIcon className="w-5 h-5 mr-2 text-white" aria-hidden="true" />
                        Sushil Buragute
                        <ChevronDownIcon
                          className="w-5 h-5 ml-2 -mr-1 text-white"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            <button
                              className={
                                "bg-white text-gray-600 group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-brand-100"
                              }
                            >
                              Logout
                            </button>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div> */}
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden z-30"
            >
              <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href="/food">
                        <a className="text-4xl italic font-bold text-brand-600">Zuck</a>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-12">
                    {/* Mobile view */}
                    <nav className="grid gap-6">
                      {navlinks.map((item) => (
                        <a
                          key={item.id}
                          href={item.route}
                          className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-md bg-brand-100 text-brand-500">
                            {item.icon}
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6">
                  <div className="mt-6">
                    <Link href="/auth/login">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-700"
                      >
                        Login
                      </a>
                    </Link>
                    <p className="mt-6 text-base font-medium text-center text-gray-500">
                      Ready to create a new account?{" "}
                      <Link href="/auth/signup">
                        <a href="#" className="text-brand-600 hover:text-brand-500">
                          Sign up
                        </a>
                      </Link>
                    </p>
                    {/* User signed in */}
                    {/* <button className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-700">
                      Logout
                    </button> */}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default Navbar;
