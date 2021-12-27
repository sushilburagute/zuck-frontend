import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

interface IsortValue {
  name: string;
  query: string;
}

const sortValues: IsortValue[] = [
  {
    name: "Relevance",
    query: "RELEVANCE",
  },
  {
    name: "Delivery Time",
    query: "DELIVERY_TIME",
  },
  {
    name: "Rating",
    query: "RATING",
  },
  {
    name: "Cost: Low to High",
    query: "COST_LOW_TO_HIGH",
  },
  {
    name: "Cost: High to Low",
    query: "COST_HIGH_TO_LOW",
  },
];
// TODO: Use routes to set the underline for the classnames of the sort buttons
const SortBar = () => {
  return (
    <>
      <div className="z-10 flex items-end justify-between my-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">198 restaurants</h1>
        </div>
        <div className="flex">
          {sortValues.map(({ name, query }) => {
            return (
              <div
                className="p-2 mr-6 text-sm text-gray-600 border-b-2 border-gray-700 "
                key={name}
              >
                {name}
              </div>
            );
          })}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-md hover:bg-brand-100 hover:text-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-opacity-75">
                Filter
                <ChevronDownIcon
                  className="w-5 h-5 ml-2 -mr-1 hover:text-brand-600"
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
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-brand-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Pure Veg
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Offers
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Archive
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Move
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Delete
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <hr className="mb-8" />
    </>
  );
};

export default SortBar;
