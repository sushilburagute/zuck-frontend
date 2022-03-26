import { NextPage } from "next";
import useCart from "../hooks/useCart";
import { Navbar, SEO, Jumbotron, CartCard, BillCard, Footer, Spinner } from "../components/index";
import { ICart } from "../types/ICart";
import { UserContext } from "./../context/UserContext";
import { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation/fadeInUp";
import { stagger } from "./../animation/stagger";

const Cart: NextPage = () => {
  const { user } = useContext(UserContext);
  const { cartData, isCartLoading } = useCart();

  return (
    <>
      <SEO title="Cart" />
      <Navbar />
      <Jumbotron gradient="bg-white">
        <h1 className="text-3xl font-bold text-gray-800">Cart</h1>
        <p className="mt-2 text-gray-600">Ready for your order to be delivered to you?</p>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          exit="exit"
          layout
          className="grid grid-cols-1 gap-4 md:grid-cols-3 w-full mt-8"
        >
          <div className="col-span-1 md:col-span-2 space-y-2 w-full">
            {user.firstName === "" && (
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center justify-center w-full"
              >
                <div>
                  <Image
                    src={"/addtocart.png"}
                    alt="Your Favourite food!"
                    width={400}
                    height={400}
                  />
                  <p className="text-center text-gray-600">
                    The items you add to the Cart will show up here!
                  </p>
                </div>
              </motion.div>
            )}
            {isCartLoading ? (
              <Spinner />
            ) : cartData?.data.foodCart.length === 0 ? (
              <div className="inline-flex items-center justify-center w-full">
                <div>
                  <Image
                    src={"/addtocart.png"}
                    alt="Your Favourite food!"
                    width={400}
                    height={400}
                  />
                  <p className="text-center text-gray-600">
                    The items you add to the Cart will show up here!
                  </p>
                </div>
              </div>
            ) : (
              cartData?.data.foodCart.map((cartItem: ICart) => {
                return <CartCard cartItem={cartItem} key={cartItem._id.name} />;
              })
            )}
          </div>
          <div className="col-span-1 space-y-5 w-full">
            <BillCard isCartLoading={isCartLoading} cartData={cartData} />
          </div>
        </motion.div>
      </Jumbotron>
      <Footer />
    </>
  );
};

export default Cart;
