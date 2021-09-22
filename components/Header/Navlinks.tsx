import React from "react";
import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  SparklesIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

interface INavLinks {
  id: number;
  route: string;
  name: string;
  icon: React.ReactNode;
}

const iconStyles: string = "w-6 h-6 mr-2";

export const navlinks: INavLinks[] = [
  {
    id: 1,
    route: "/search",
    name: "Search",
    icon: <SearchIcon className={iconStyles} />,
  },
  {
    id: 2,
    route: "/offers",
    name: "Offers",
    icon: <SparklesIcon className={iconStyles} />,
  },
  {
    id: 3,
    route: "/favourites",
    name: "Favourites",
    icon: <HeartIcon className={iconStyles} />,
  },
  {
    id: 4,
    route: "/cart",
    name: "Cart",
    icon: <ShoppingCartIcon className={iconStyles} />,
  },
  {
    id: 5,
    route: "/auth/signin",
    name: "Signin",
    icon: <UserCircleIcon className={iconStyles} />,
  },
];
