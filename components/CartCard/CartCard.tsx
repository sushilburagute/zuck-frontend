import { MinusIcon, PlusIcon, HeartIcon as HeartIconOutline } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

const CartCard = () => {
  return (
    <>
      <div className="relative flex p-4 space-x-5 border-2 border-gray-100 rounded-md hover:border-gray-200">
        <div>
          <div className="w-48 h-48 bg-gray-300 rounded-sm">
            <div className="absolute p-1 rounded-full w-7 h-7 hover:bg-red-200 top-7 left-7">
              <HeartIconOutline className="text-red-400" />
              {/* <HeartIconSolid className="text-red-500" /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-medium text-gray-800 ">Jelebi Junction </h1>
            <h3 className="mt-2 text-sm font-light text-gray-600">Snacks | 4.4 Stars | Veg</h3>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 transition border-2 border-gray-200 rounded duration-400 hover:bg-brand-400 hover:border-brand-200 hover:text-white">
              <PlusIcon className="w-4 h-4" />
            </button>
            <p className="text-sm font-semibold">2</p>
            <button className="p-2 transition border-2 border-gray-200 rounded duration-400 hover:bg-brand-300 hover:border-brand-200 hover:text-white">
              <MinusIcon className="w-4 h-4" />
            </button>
          </div>

          <button className="text-sm text-gray-700 border-2 border-gray-200 rounded w-36 hover:border-red-400 hover:text-red-600">
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
