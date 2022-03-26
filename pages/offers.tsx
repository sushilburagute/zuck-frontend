import { NextPage } from "next";
import { Navbar, Footer, Layout, Jumbotron, SEO } from "../components/index";
import clsx from "clsx";
import { stagger } from "./../animation/stagger";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation/fadeInUp";

const Offers: NextPage = () => {
  const offers = [
    {
      heading: "10% off",
      code: "10OFF",
      subheading: "Use the code to get 10% off on your next order.*",
      gradient: "from-[#f0ae1f] to-[#f55727]",
    },
    {
      heading: "Flat 100/- off",
      code: "FLAT100",
      subheading: "Use the code to get 100/- Rs off on your next order.*",
      gradient: "from-[#F27121] via-[#E94057] to-[#8A2387]",
    },
    {
      heading: "30% OFF",
      code: "30OFF",
      subheading: "Use the code to get 30% off on orders above 200Rs*",
      gradient: "from-[#1CB5E0] to-[#000046]",
    },
    {
      heading: "Free Cola",
      code: "COLA72",
      subheading: "Use the code COLA72 to get a free bottle of Cola.*",
      gradient: "from-[#e53935] to-[#89216B]",
    },
  ];

  return (
    <>
      <SEO title="Offers" />
      <Navbar />
      <Jumbotron gradient="bg-white">
        <h1 className="text-3xl font-bold text-gray-800">Offers</h1>
        <p className="mt-2 text-gray-600 ">Looking for a sweet deal? 😋</p>
        <p className="mt-1 text-gray-600 ">We got you covered.</p>
      </Jumbotron>
      <Layout>
        <motion.div
          variants={stagger}
          initial="initial" animate="animate" exit="exit"
          className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mt-8"
        >
          {offers.map(({ heading, code, subheading, gradient }) => (
            <motion.div
              variants={fadeInUp}
              className={clsx("p-4 bg-gradient-to-br text-white rounded-lg shadow-md", gradient)}
              key={heading}
            >
              <h1 className="text-4xl font-bold text-white">{heading}</h1>
              <p className="mt-2 font-bold text-white">{code}</p>
              <p className="mt-6">{subheading}</p>
            </motion.div>
          ))}
        </motion.div>
      </Layout>
      <Footer />
    </>
  );
};

export default Offers;
