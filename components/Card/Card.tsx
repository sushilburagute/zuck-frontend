import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

import Link from "next/link";

const Card = () => {
  return (
    <>
      <div className="relative p-4 border-2 border-gray-100 hover:border-gray-200">
        <div className="w-full h-40 bg-gray-300 rounded-sm">
          <div className="absolute p-1 rounded-full w-7 h-7 hover:bg-red-200 top-7 right-7">
            <HeartIconOutline className="text-red-400" />
            {/* <HeartIconSolid className="text-red-500" /> */}
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <h1 className="text-2xl font-medium text-gray-800 ">Jelebi Junction</h1>
          <h3 className="text-sm font-light text-gray-600 ">Snacks</h3>
          <div className="flex justify-between">
            <div className="px-2 py-1 text-sm text-white bg-green-600 rounded">4.4</div>
            <div className="px-2 py-1 text-sm text-gray-500">27min</div>
            <div className="px-2 py-1 text-sm text-gray-500">150$ for two</div>
          </div>
          <hr />
          <div>
            <Link href="/food/123" passHref>
              <button className="w-full py-2 text-sm font-bold tracking-tight capitalize transition duration-300 ease-in-out rounded text-brand-400 hover:bg-brand-100 hover:text-brand-500">
                ADD TO CART
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
