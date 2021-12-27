import { NextPage } from "next";
import { Navbar, SEO, Layout, Jumbotron, CartCard, BillCard } from "./../../components/index";

const Cart: NextPage = () => {
  return (
    <>
      <SEO title="Cart | Zuck" />
      <Navbar />
      <Jumbotron gradient="bg-white">
        <h1 className="text-3xl font-bold text-gray-800">Cart</h1>
        <p className="mt-2 text-gray-600">Ready for your order to be delivered to you?</p>
      </Jumbotron>
      <Layout>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="col-span-2 space-y-2">
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          <div className="col-span-1 space-y-5">
            <BillCard />
            <button className="w-full p-2 text-lg font-semibold text-white transition duration-300 rounded bg-brand-500 hover:bg-brand-700 hover:shadow-md">
              Checkout
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
