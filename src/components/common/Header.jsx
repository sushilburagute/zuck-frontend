import React from "react";
import { ReactComponent as ZuckLogo } from "../../assets/icons/zuck-logo.svg";
import { SearchIcon, HeartIcon, ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

const headerNavLinks = [
    {
        label: "Search",
        icon: <SearchIcon />,
        path: "/search",
    },
    {
        label: "Wishlist",
        icon: <HeartIcon />,
        path: "/wishlist",
    },
    {
        label: "Cart",
        icon: <ShoppingCartIcon />,
        path: "/cart",
    },
];

function Header(props) {
    return (
        <header className="flex justify-between p-6 mx-auto max-w-7xl">
            <div>
                <ZuckLogo className="w-24" />
            </div>
            <div className="flex">
                {headerNavLinks.map(({ label, icon, path }) => {
                    return (
                        <NavLink
                            to={path}
                            className="flex justify-center pt-1 ml-16 align-middle bg-white cursor-pointer text-secondary-600 hover:text-primary-700"
                        >
                            <span className="w-5 text-lg align-baseline stroke-1 text-secondary-700 ">
                                {icon}
                            </span>
                            <p className="ml-2 text-sm font-semibold align-baseline text-secondary-700 ">
                                {label}
                            </p>
                        </NavLink>
                    );
                })}
                <NavLink
                    to="/login"
                    className="flex pt-1 ml-16 align-middle bg-white cursor-pointer justify-cente text-secondary-600 hover:text-secondary-500"
                >
                    <div className="w-5 text-lg align-baseline stroke-1 text-secondary-700">
                        <UserCircleIcon />
                    </div>
                    <p className="ml-2 text-sm font-semibold align-baseline text-secondary-700">
                        Sign in
                    </p>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;
