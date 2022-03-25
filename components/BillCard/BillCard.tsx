import { ICart } from "../../types/ICart";
import { useEffect, useState } from "react";
import { CreditCardIcon, CurrencyRupeeIcon } from "@heroicons/react/outline";
import { AxiosResponse } from "axios";
import Spinner from "../Spinner/Spinner";

interface IProps {
  isCartLoading: boolean;
  cartData?: AxiosResponse<any, any>;
}

const BillCard = ({ isCartLoading, cartData }: IProps) => {
  const [total, setTotal] = useState<number>(0);
  const [gstTax, setGtsTax] = useState<number>(0);

  const [offer, setOffer] = useState<string>("none");

  // if (!isCartLoading) {
  //   cartData?.data.foodCart.map((cartItem: ICart) => {
  //     cartItem._id.discount === 0
  //       ? setTotal(total + Math.round(cartItem.quantity * cartItem._id.price))
  //       : setTotal(
  //           total +
  //             Math.round(
  //               cartItem.quantity *
  //                 (cartItem._id.price - cartItem._id.price * cartItem._id.discount * 0.01)
  //             )
  //         );
  //   });
  // }

  return (
    <>
      <div className="p-4 space-y-4 border-2 border-gray-100 rounded-md hover:border-gray-200 ">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 ">Bill Details</h1>
        </div>
        <hr />
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Items</h3>
          {isCartLoading ? (
            <Spinner />
          ) : (
            cartData?.data.foodCart.map((cartItem: ICart) => {
              return (
                <>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <p className="text-sm text-gray-600 mr-2">{cartItem.quantity}x</p>

                      <p className="text-sm text-gray-600">{cartItem._id.name}</p>
                    </div>
                    <p className="text-sm text-gray-600 flex items-center">
                      <CurrencyRupeeIcon className="w-5 h-5 mr-1" />
                      {cartItem._id.discount === 0
                        ? Math.round(cartItem.quantity * cartItem._id.price)
                        : Math.round(
                            cartItem.quantity *
                              (cartItem._id.price -
                                cartItem._id.price * cartItem._id.discount * 0.01)
                          )}
                    </p>
                  </div>
                </>
              );
            })
          )}
        </div>
        <div className="flex justify-between">
          <h3 className="font-semibold text-gray-700">Delivery Fee</h3>
          <h3 className="font-semibold text-gray-700 flex items-center">
            <CurrencyRupeeIcon className="w-5 h-5 mr-1" /> 63
          </h3>
        </div>
        <div className="flex justify-between">
          <h3 className="font-semibold text-gray-700">GST 5%</h3>
          <h3 className="font-semibold text-gray-700 flex items-center">
            <CurrencyRupeeIcon className="w-5 h-5 mr-1" /> {gstTax}
          </h3>
        </div>
        <hr />
        <div className="flex justify-between">
          <h3 className="font-semibold text-gray-800">To pay</h3>
          <h3 className="font-semibold text-gray-800 flex items-center">
            <CurrencyRupeeIcon className="w-5 h-5 mr-1" /> {total}
          </h3>
        </div>
      </div>
      <button className="w-full p-2 text-lg font-medium text-white transition duration-300 rounded bg-brand-500 hover:bg-brand-700 hover:shadow-md flex items-center justify-center">
        <CreditCardIcon className="w-5 h-5 mr-2" />
        Checkout
      </button>
    </>
  );
};

export default BillCard;
