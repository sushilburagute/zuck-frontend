import { SearchIcon, HeartIcon, ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/outline";
import { NavLink, Link } from "react-router-dom";

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
        <Link to="/">
          <ZuckLogo className="w-24" />
        </Link>
      </div>
      <div className="flex">
        {headerNavLinks.map(({ label, icon, path }) => {
          return (
            <NavLink
              to={path}
              className="flex justify-center pt-1 ml-16 align-middle bg-white cursor-pointer"
            >
              <span className="w-5 text-lg align-baseline stroke-1 text-secondary-800 ">
                {icon}
              </span>
              <p className="ml-2 text-sm font-semibold align-baseline text-secondary-800 ">
                {label}
              </p>
            </NavLink>
          );
        })}
        <NavLink
          to="/login"
          className="flex justify-center pt-1 ml-16 align-middle bg-white cursor-pointer"
        >
          <div className="w-5 text-lg align-baseline stroke-1 text-secondary-800">
            <UserCircleIcon />
          </div>
          <p className="ml-2 text-sm font-semibold align-baseline text-secondary-800">Sign in</p>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
