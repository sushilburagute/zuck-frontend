import { navlinks } from "./Navlinks";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import clsx from "clsx";

const Header = () => {
  const nextRoute = useRouter();
  return (
    <header>
      <div className="container flex items-center justify-between px-8 py-4 mx-auto">
        <div>
          <h1 className="text-4xl italic font-bold text-brand-600">Zuck</h1>
        </div>
        <div className="flex">
          {navlinks.map(({ id, route, name, icon }) => {
            return (
              <span key={id} className="flex ml-8 text-gray-900">
                <Link href={route}>
                  <a
                    className={clsx("flex font-semibold", {
                      "text-gray-800 ": nextRoute.pathname === route,
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
      </div>
    </header>
  );
};

export default Header;
