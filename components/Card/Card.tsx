import {
  HeartIcon as HeartIconOutline,
  CurrencyRupeeIcon,
  TicketIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid, StarIcon } from "@heroicons/react/solid";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import useFavs from "./../../hooks/useFavs";
import VegIcon from "../VegIcon/VegIcon";
import { UserContext } from "./../../context/UserContext";
import { useContext } from "react";

import toast from "react-hot-toast";

export interface ICard {
  name: string;
  type: string;
  deliveryTime: number;
  _id: string;
  imageSrc: string;
  price: number;
  discount: number;
  rating: number;
  veg: boolean;
}

const Card = ({ _id, name, type, rating, deliveryTime, imageSrc, price, discount, veg }: ICard) => {
  const { user } = useContext(UserContext);
  const { mutate, isFav } = useFavs(_id);

  function handleClick() {
    user.token !== ""
      ? mutate({ _id: _id, type: isFav ? "REMOVE_FROM_FAVOURITES" : "ADD_TO_FAVOURITES" })
      : toast.error("You need to be signed in to do that");
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

  function foodType(type: string): string {
    if (type === "MAIN_COURSE") {
      return "Main Course";
    } else if (type === "DESSERT") {
      return "Dessert";
    } else {
      return "Fast Food";
    }
  }

  return (
    <>
      <div className="p-4 border-2 border-gray-100 hover:border-gray-200">
        <div className="relative w-full h-40 bg-gray-300 rounded-sm">
          <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" />

          <div
            className="absolute p-1 bg-white rounded-full w-7 h-7 hover:bg-red-200 top-2 left-2"
            onClick={handleClick}
          >
            {isFav ? (
              <HeartIconSolid className="text-red-400" />
            ) : (
              <HeartIconOutline className="text-red-500" />
            )}
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex justify-between item-center">
            <h1 className="text-2xl font-medium text-gray-800 ">{name}</h1>
            <VegIcon isVeg={veg} />
          </div>
          <div className="flex justify-between">
            <h3 className="text-sm font-light text-gray-600 ">{foodType(type)}</h3>
            {discount !== 0 && (
              <div className="inline-flex items-center px-2 py-1 text-sm text-red-600">
                <TicketIcon className="w-4 h-4 mr-2" /> {discount}%
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <div
              className={clsx(
                "inline-flex items-center px-2 py-1 text-sm text-white rounded",
                ratingColor(rating)
              )}
            >
              <StarIcon className="w-4 h-4 mr-1" />
              {rating}
            </div>
            <div className="inline-flex items-center px-2 py-1 text-sm text-gray-500">
              <ClockIcon className="w-4 h-4 mr-1" /> {deliveryTime}min
            </div>
            <div className="inline-flex items-center px-2 py-1 text-sm text-gray-500">
              <CurrencyRupeeIcon className="w-4 h-4 mr-1" /> {price}
            </div>
          </div>
          <hr />
          <div>
            <Link href={clsx("/food/" + _id)} passHref>
              <button className="w-full py-2 text-sm font-bold tracking-tight capitalize transition duration-300 ease-in-out rounded text-brand-400 hover:bg-brand-100 hover:text-brand-500">
                View Item
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
