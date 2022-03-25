import { Menu, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { IDish } from "../../types/IDish";
import { filterValues, sortValues } from "./values";
import { CheckIcon } from "@heroicons/react/outline";

interface IProps {
  totalDishes: number | undefined;
  dishData: IDish[] | undefined;
  sortedDishes: IDish[] | undefined;
  setsortedDishes: Dispatch<SetStateAction<IDish[] | undefined>>;
}

const SortBar = ({ totalDishes = 0, dishData, sortedDishes, setsortedDishes }: IProps) => {
  const [sortParameters, setsortParameters] = useState<string[] | []>([]);
  const [valueParameters, setvalueParameters] = useState<string[] | []>([]);

  function handleSort(query: string, name: string) {
    switch (query) {
      case "RELEVANCE":
        if (dishData !== undefined) {
          setsortedDishes(dishData);
        }
        break;
      case "DELIVERY_TIME":
        if (sortedDishes !== undefined) {
          const fastestDelivery = [...sortedDishes];
          fastestDelivery?.sort((a, b) => a.deliveryTime - b.deliveryTime);
          setsortParameters([name]);
          setsortedDishes([...fastestDelivery]);
        }
        break;
      case "RATING":
        if (sortedDishes !== undefined) {
          const topRated = [...sortedDishes];
          topRated?.sort((a, b) => b.rating - a.rating);
          setsortParameters([name]);
          setsortedDishes([...topRated]);
        }
        break;
      case "COST_LOW_TO_HIGH":
        if (sortedDishes !== undefined) {
          const lowestPriced = [...sortedDishes];
          lowestPriced?.sort((a, b) => a.price - b.price);
          setsortParameters([name]);
          setsortedDishes([...lowestPriced]);
        }
        break;
      case "COST_HIGH_TO_LOW":
        if (sortedDishes !== undefined) {
          const highestPriced = [...sortedDishes];
          highestPriced?.sort((a, b) => b.price - a.price);
          setsortParameters([name]);
          setsortedDishes([...highestPriced]);
        }
        break;
      case "RESET":
        if (dishData !== undefined) {
          setsortParameters([]);
          setsortedDishes([...dishData]);
        }
        break;
      default:
        break;
    }
  }

  function handleFilter(query: string, name: string) {
    switch (query) {
      case "PURE_VEG":
        if (dishData !== undefined) {
          const vegDishes = dishData?.filter((dish) => dish.veg === true);
          setvalueParameters([...valueParameters, name]);
          setsortedDishes(vegDishes);
        }
        break;

      case "DISCOUNT":
        if (sortedDishes !== undefined) {
          const discountedDishes = sortedDishes?.filter((dish) => dish.discount > 0);
          setvalueParameters([...valueParameters, name]);
          setsortedDishes(discountedDishes);
        }
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="z-10 flex items-center justify-between my-8">
        <div className="inline-flex items-center h-">
          <h1 className="text-sm font-bold text-gray-800 sm:text-3xl">{totalDishes} Dishes</h1>
        </div>
        <div className="flex align-middle">
          {(sortParameters.length !== 0 || valueParameters.length !== 0) && (
            <button
              className="hidden px-4 py-2 mr-4 text-sm font-medium transition-colors rounded-md sm:block bg-brand-50 text-brand-500 hover:bg-brand-100"
              onClick={() => {
                setsortParameters([]);
                setvalueParameters([]);
                handleSort("RESET", "Reset");
              }}
            >
              Reset Filters
            </button>
          )}

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-800 bg-white rounded-md hover:bg-brand-100 hover:text-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-opacity-75">
                Sort
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
                  {sortValues.map(({ name, query }) => (
                    <Menu.Item key={query}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-brand-500 text-white" : "text-gray-900"
                          } group flex justify-between rounded-md items-center w-full px-2 py-2 text-sm`}
                          onClick={() => {
                            handleSort(query, name);
                          }}
                        >
                          {name}
                          {sortParameters.find((parameter) => parameter === name) ? (
                            <CheckIcon className="w-5 h-5" />
                          ) : null}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
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
                  {filterValues.map(({ name, query }) => (
                    <Menu.Item key={query}>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-brand-500 text-white" : "text-gray-900"
                          } group flex justify-between rounded-md items-center w-full px-2 py-2 text-sm`}
                          onClick={() => {
                            handleFilter(query, name);
                          }}
                        >
                          {name}
                          {valueParameters.find((parameter) => parameter === name) ? (
                            <CheckIcon className="w-5 h-5" />
                          ) : null}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="flex justify-end sm:hidden">
        {(sortParameters.length !== 0 || valueParameters.length !== 0) && (
          <button
            className="px-4 py-2 mr-4 text-sm font-medium transition-colors rounded-md bg-brand-50 text-brand-500 hover:bg-brand-100"
            onClick={() => {
              setsortParameters([]);
              setvalueParameters([]);
              handleSort("RESET", "Reset");
            }}
          >
            Reset Filters
          </button>
        )}
      </div>
      <hr className="mt-4 mb-8" />
    </>
  );
};

export default SortBar;
