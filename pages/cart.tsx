import { NextPage } from "next";
import useCart from "../hooks/useCart";
import useFavs from "../hooks/useFavs";
import {
  Navbar,
  SEO,
  Layout,
  Jumbotron,
  CartCard,
  BillCard,
  Footer,
  Spinner,
} from "../components/index";
import { ICart } from "../types/ICart";


const Cart: NextPage = () => {
  const { cartData, isCartLoading } = useCart();

  return (
    <>
      <SEO title="Cart | Zuck" />
      <Navbar />
      <Jumbotron gradient="bg-white">
        <h1 className="text-3xl font-bold text-gray-800">Cart</h1>
        <p className="mt-2 text-gray-600">Ready for your order to be delivered to you?</p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full mt-8">
          <div className="col-span-1 md:col-span-2 space-y-2 w-full">
            {isCartLoading ? (
              <Spinner />
            ) : (
              cartData?.data.foodCart.map((cartItem: ICart) => {
                return <CartCard cartItem={cartItem} key={cartItem._id.name} />;
              })
            )}
          </div>
          <div className="col-span-1 space-y-5 w-full">
            <BillCard isCartLoading={isCartLoading} cartData={cartData} />
          </div>
        </div>
      </Jumbotron>
      <Footer />
    </>
  );
};

export default Cart;
