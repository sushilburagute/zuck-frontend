import {
  MinusIcon,
  PlusIcon,
  HeartIcon as HeartIconOutline,
  TrashIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

const CartCard = () => {
  return (
    <>
      <div className="relative flex p-4 space-x-5 border-2 border-gray-100 rounded-md hover:border-gray-200">
        <div>
          <div className="w-20 h-20 bg-gray-300 rounded-sm sm:h-48 sm:w-48">
            <div className="absolute p-1 rounded-full w-7 h-7 hover:bg-red-200 top-5 left-5 sm:top-7 sm:left-7">
              <HeartIconOutline className="text-red-400" />
              {/* <HeartIconSolid className="text-red-500" /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-medium text-gray-800 sm:text-3xl ">Jelebi Junction </h1>
              <h3 className="mt-2 text-xs font-light text-gray-600 sm:mt-4 sm:text-base">
                Snacks | 4.4 Stars | Veg
              </h3>
            </div>

            <div>
              <button className="p-2 text-sm text-gray-700 border-2 border-gray-200 rounded hover:border-red-400 hover:text-red-600">
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center mt-2 space-x-4">
            <button className="p-1 transition border-2 border-gray-200 rounded sm:p-2 duration-400 hover:bg-brand-500 hover:border-brand-200 hover:text-white">
              <PlusIcon className="w-4 h-4" />
            </button>
            <p className="text-sm font-semibold">2</p>
            <button className="p-1 transition border-2 border-gray-200 rounded sm:p-2 duration-400 hover:bg-brand-300 hover:border-brand-200 hover:text-white">
              <MinusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
