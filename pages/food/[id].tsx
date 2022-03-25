import { NextPage, NextPageContext } from "next";

import { Navbar, SEO, Footer, VegIcon, Spinner } from "../../components/index";
import {
  ShieldCheckIcon,
  HeartIcon as HeartIconOutline,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/outline";
import { CheckIcon, StarIcon, HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import axios from "axios";
import clsx from "clsx";
import Image from "next/image";

import { IDish } from "./../../types/IDish";
import useFavs from "./../../hooks/useFavs";
import useCart from "./../../hooks/useCart";
import { useEffect, useState } from "react";
import { ICart } from "../../types/ICart";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface IProps {
  dish: IDish;
}

const FoodPage: NextPage<IProps> = ({ dish }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [inCart, setInCart] = useState<boolean>(false);
  const { mutate: favMutate, isFav, isFavLoading } = useFavs(dish._id);
  const { mutate: cartMutate, cartData, isCartLoading } = useCart(dish._id);

  useEffect(() => {
    if (!isCartLoading && dish._id) {
      cartData?.data.foodCart.map((cartItem: ICart) => {
        cartItem._id._id === dish._id && setCartQuantity(cartItem.quantity);
        cartItem._id._id === dish._id && setInCart(true);
      });
    }
  }, [isCartLoading, cartData, dish._id]);

  function handleFav() {
    favMutate({ _id: dish._id, type: isFav ? "REMOVE_FROM_FAVOURITES" : "ADD_TO_FAVOURITES" });
  }

  function handleAddToCart() {
    cartMutate({ _id: dish._id, type: "ADD_TO_CART", quantity: 1 });
  }
  function handleDeletefromCart() {
    cartMutate({ _id: dish._id, type: "REMOVE_FROM_CART", quantity: cartQuantity });
    setInCart(false);
  }

  function handleAddQuantityToCart() {
    cartMutate({ _id: dish._id, type: "ADD_QUANTITY_IN_CART", quantity: cartQuantity });
    setCartQuantity(cartQuantity + 1);
    setIsButtonDisabled(false);
  }
  function handleSubtractQuantityCart() {
    if (cartQuantity !== 1) {
      cartMutate({ _id: dish._id, type: "SUBTRACT_QUANTITY_IN_CART", quantity: cartQuantity });
      setCartQuantity(cartQuantity - 1);
    } else {
      setIsButtonDisabled(true);
    }
  }

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

                <div className="inline-flex items-center justify-between w-full mt-4">
                  <div className="inline-flex items-center">
                    <VegIcon isVeg={dish.veg} />
                    <h1 className="ml-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      {dish.name}
                    </h1>
                  </div>
                  <div
                    className="inline-flex items-center justify-center p-3 bg-white rounded-full hover:bg-red-200"
                    onClick={handleFav}
                  >
                    {isFavLoading ? (
                      <Spinner />
                    ) : isFav ? (
                      <HeartIconSolid className="w-5 h-5 text-red-400" />
                    ) : (
                      <HeartIconOutline className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>

                <section aria-labelledby="information-heading" className="mt-4">
                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>

                  <div className="flex items-center">
                    <p className="text-lg text-gray-700 sm:text-xl flex items-center">
                      <CurrencyRupeeIcon className="w-5 h-5 mr-1" /> {dish.price}
                    </p>

                    <div className="pl-4 ml-4 border-l border-gray-300">
                      <h2 className="sr-only">Reviews</h2>
                      <div className="flex items-center">
                        <div>
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  Math.round(dish.rating) > rating
                                    ? "text-yellow-400"
                                    : "text-gray-300",
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
                  <div className="mt-10">
                    {inCart ? (
                      <>
                        <div className="inline-flex justify-between w-full">
                          <div className="inline-flex items-center justify-between">
                            <p className="mr-5 font-medium text-gray-500">Update Quantity:</p>
                            <div className="inline-flex items-center border-2 rounded-md">
                              <button
                                className={clsx(
                                  "p-2 mr-5 text-gray-700 bg-white border-2 rounded-md hover:bg-brand-100 hover:text-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-brand-500",
                                  isButtonDisabled && "cursor-not-allowed"
                                )}
                                onClick={handleSubtractQuantityCart}
                                disabled={isButtonDisabled}
                              >
                                <MinusIcon className="w-5 h-5" />
                              </button>
                              <p className="mr-5 font-medium text-gray-500">{cartQuantity}</p>
                              <button
                                className="p-2 text-gray-700 bg-white border-2 rounded-md hover:bg-brand-100 hover:text-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-brand-500"
                                onClick={handleAddQuantityToCart}
                              >
                                <PlusIcon className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                          <button
                            className="p-2 text-gray-700 bg-white border-2 rounded-md hover:bg-red-100 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-brand-500"
                            onClick={handleDeletefromCart}
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-brand-500"
                        onClick={handleAddToCart}
                      >
                        Add to cart
                      </button>
                    )}
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

FoodPage.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;

  const res = await axios.get(clsx("http://localhost:5000/api/food/" + id));
  const dish = await res.data.dishItem[0];

  return { dish };
};

export default FoodPage;
