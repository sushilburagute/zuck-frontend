import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

import { Navbar, SEO, Footer } from "../../components/index";
import { RadioGroup } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from "@heroicons/react/solid";
import { useQuery } from "react-query";
import axios from "axios";
import clsx from "clsx";
import Spinner from "./../../components/Spinner/Spinner";
import Image from "next/image";
import { IDish } from "../../types/IDish";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const FoodPage: NextPage = () => {
  const router = useRouter();
  const { isLoading, isError, data, error } = useQuery("singleDish", () =>
    axios(clsx("http://localhost:5000/api/food/" + router.query.id))
  );

  if (isLoading)
    return (
      <>
        <Spinner />
      </>
    );
  const dish: IDish = data?.data.dishItem[0];

  console.log(dish);
  if (isError)
    return (
      <>
        <div>Error! </div>
      </>
    );

  const breadcrumbs = [
    { id: 1, name: "Food", href: "/food" },
    { id: 2, name: dish.name, href: "#" },
  ];

  return (
    <>
      <SEO title="Food | Zuck" />
      <Navbar />
      <div className="bg-gray-50">
        <main>
          <div className="bg-white">
            <div className="max-w-2xl px-8 pt-8 pb-24 mx-auto lg:pt-12 sm:pt-12 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
              {/* Product details */}
              <div className="lg:max-w-lg lg:self-end">
                <nav aria-label="Breadcrumb">
                  <ol role="list" className="flex items-center space-x-2">
                    {breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                      <li key={breadcrumb.id}>
                        <div className="flex items-center text-sm">
                          <a
                            href={breadcrumb.href}
                            className="font-medium text-gray-500 hover:text-gray-900"
                          >
                            {breadcrumb.name}
                          </a>
                          {breadcrumbIdx !== breadcrumbs.length - 1 ? (
                            <svg
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              aria-hidden="true"
                              className="flex-shrink-0 w-5 h-5 ml-2 text-gray-300"
                            >
                              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="mt-4">
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {dish.name}
                  </h1>
                </div>

                <section aria-labelledby="information-heading" className="mt-4">
                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>

                  <div className="flex items-center">
                    <p className="text-lg text-gray-900 sm:text-xl">₹ {dish.price}</p>

                    <div className="pl-4 ml-4 border-l border-gray-300">
                      <h2 className="sr-only">Reviews</h2>
                      <div className="flex items-center">
                        <div>
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  dish.rating > rating ? "text-yellow-400" : "text-gray-300",
                                  "h-5 w-5 flex-shrink-0"
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{dish.rating} out of 5 stars</p>
                        </div>
                        <p className="ml-2 text-sm text-gray-500">{dish.rating} rating</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-6">
                    <p className="text-base text-gray-500">{dish.description}</p>
                  </div>

                  <div className="flex items-center mt-6">
                    <CheckIcon
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      aria-hidden="true"
                    />
                    <p className="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
                  </div>
                </section>
              </div>

              {/* Product image */}
              <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                <div className="overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                  <Image src={dish.image} alt={dish.name} layout="fill" objectFit="cover" />
                </div>
              </div>

              {/* Product form */}
              <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
                <section aria-labelledby="options-heading">
                  <h2 id="options-heading" className="sr-only">
                    Product options
                  </h2>

                  <div className="mt-10">
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-brand-500"
                    >
                      Add to cart
                    </button>
                  </div>
                  <div className="mt-6 text-center">
                    <a href="#" className="inline-flex text-base font-medium group">
                      <ShieldCheckIcon
                        className="flex-shrink-0 w-6 h-6 mr-2 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="text-gray-500 hover:text-gray-700">
                        We follow Covid-19 guidelines
                      </span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FoodPage;
