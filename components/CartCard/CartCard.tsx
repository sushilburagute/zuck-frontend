import {
  MinusIcon,
  PlusIcon,
  HeartIcon as HeartIconOutline,
  TrashIcon,
  CurrencyRupeeIcon,
  TicketIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid, StarIcon } from "@heroicons/react/24/solid";
import VegIcon from "../VegIcon/VegIcon";
import clsx from "clsx";
import { ICart } from "./../../types/ICart";
import Image from "next/image";
import useFavs from "./../../hooks/useFavs";
import useCart from "./../../hooks/useCart";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animation/fadeInUp";
import Link from "next/link";

interface IProps {
  cartItem: ICart;
}

const CartCard = ({ cartItem }: IProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [cartQuantity, setCartQuantity] = useState<number>(cartItem.quantity);
  const [total, setTotal] = useState<number>(0);
  const { isFav, mutate } = useFavs(cartItem._id._id);
  const { mutate: cartMutate } = useCart(cartItem._id._id);

  useEffect(() => {
    if (cartItem._id.discount === 0) {
      setTotal(Math.round(cartQuantity * cartItem._id.price));
    } else {
      setTotal(
        Math.round(
          cartQuantity * (cartItem._id.price - cartItem._id.price * cartItem._id.discount * 0.01)
        )
      );
    }
  }, [setTotal, cartItem, cartQuantity]);

  function handleFavs() {
    mutate({ _id: cartItem._id._id, type: isFav ? "REMOVE_FROM_FAVOURITES" : "ADD_TO_FAVOURITES" });
  }
  function handleDeletefromCart() {
    cartMutate({ _id: cartItem._id._id, type: "REMOVE_FROM_CART", quantity: cartQuantity });
  }

  function handleAddQuantityToCart() {
    cartMutate({ _id: cartItem._id._id, type: "ADD_QUANTITY_IN_CART", quantity: cartQuantity });
    setCartQuantity(cartQuantity + 1);
    setIsButtonDisabled(false);
  }
  function handleSubtractQuantityCart() {
    if (cartQuantity !== 1) {
      cartMutate({
        _id: cartItem._id._id,
        type: "SUBTRACT_QUANTITY_IN_CART",
        quantity: cartQuantity,
      });
      setCartQuantity(cartQuantity - 1);
    } else {
      setIsButtonDisabled(true);
    }
  }

  function foodType(type: string): string {
    if (type === "MAIN_COURSE") {
      return "Main Course";
    } else if (type === "DESSERT") {
      return "Dessert";
    } else {
      return "Fast Food";
    }
  }

  function ratingColor(rating: number): string {
    if (rating >= 4.5) {
      return "bg-green-700";
    } else if (rating < 4.5 && rating >= 4) {
      return "bg-green-600";
    } else if (rating < 4 && rating >= 3.5) {
      return "bg-brand-600";
    } else if (rating < 3.5 && rating >= 3) {
      return "bg-red-500";
    } else {
      return "bg-red-600";
    }
  }
  return (
    <>
      <motion.div
        variants={fadeInUp}
        className=" flex p-4 space-x-0 lg:space-x-8 border-2 border-gray-100 rounded-md hover:border-gray-300 w-full"
      >
        <div className="hidden lg:flex">
          <div className=" relative bg-gray-300 rounded-sm h-48 w-48">
            <Image
              src={cartItem._id.image}
              alt={cartItem._id.name}
              fill
              sizes="(max-width: 1024px) 0px, 192px"
              className="object-cover"
            />
            <div
              className="absolute p-1 rounded-full w-7 h-7 hover:bg-red-50 top-3 left-3 bg-white"
              onClick={handleFavs}
            >
              {isFav ? (
                <HeartIconSolid className="text-red-500" />
              ) : (
                <HeartIconOutline className="text-red-400" />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between">
            <div>
              <div className="inline-flex items-center">
                <VegIcon isVeg={true} />
                <Link
                  href={`/food/${cartItem._id._id}`}
                  className="text-lg font-bold text-gray-800 sm:text-2xl ml-3 cursor-pointer inline-flex items-center"
                >
                  {cartItem._id.name}
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-3" />
                </Link>
              </div>
              <div className="flex mt-4 items-center">
                <div
                  className={clsx(
                    "inline-flex items-center px-2 py-1 text-sm text-white rounded mr-3",
                    ratingColor(cartItem._id.rating)
                  )}
                >
                  <StarIcon className="w-4 h-4 mr-1" />
                  {cartItem._id.rating}
                </div>

                <h3 className="text-sm font-light text-gray-500 sm:text-base">
                  {foodType(cartItem._id.type)}
                </h3>
              </div>
            </div>
            <div>
              <button
                className="p-2 text-sm text-gray-700 border-2 border-gray-200 rounded hover:border-red-400 hover:text-red-600 hover:bg-red-50 transition"
                onClick={handleDeletefromCart}
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 lg:mt-0">
            <div className="inline-flex items-center">
              <div className="inline-flex items-center border-2 rounded-md mr-2 space-x-2 md:space-x-4">
                <button
                  className={clsx(
                    "p-2  text-gray-700 bg-white border-2 rounded-md hover:bg-brand-100 hover:text-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-brand-500",
                    isButtonDisabled && isButtonDisabled && "cursor-not-allowed"
                  )}
                  onClick={handleSubtractQuantityCart}
                  disabled={isButtonDisabled}
                >
                  <MinusIcon className=" w-3 h-3 " />
                </button>
                <p className=" font-medium text-gray-500 md:text-base text-sm">{cartQuantity}</p>
                <button
                  className="p-2 text-gray-700 bg-white border-2 rounded-md hover:bg-brand-100 hover:text-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-brand-500"
                  onClick={handleAddQuantityToCart}
                >
                  <PlusIcon className="w-3 h-3 " />
                </button>
              </div>

              <div className="inline-flex items-center px-2 py-1 text-sm text-gray-500 mr-2">
                <CurrencyRupeeIcon className="w-4 h-4 mr-1" /> {cartItem._id.price}
              </div>

              {cartItem._id.discount !== 0 && (
                <>
                  <div className="hidden sm:inline-flex items-end px-2 py-1 text-sm text-red-600">
                    <TicketIcon className="w-5 h-5 mr-2" /> {cartItem._id.discount}%
                  </div>
                </>
              )}
            </div>
            <div className="inline-flex items-center px-2 py-1 text-sm text-gray-600">
              <p className="mr-2">=</p>
              <CurrencyRupeeIcon className="w-4 h-4 mr-1" /> {total}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CartCard;
