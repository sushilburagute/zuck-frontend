import { NextPage } from "next";
import { Navbar, Footer, Layout, Jumbotron } from "./../../components/index";
import clsx from "clsx";

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
      <Navbar />
      <Jumbotron gradient="bg-white">
        <h1 className="text-3xl font-bold text-gray-800">Offers</h1>
        <p className="mt-4 text-gray-600 text-sm md:text-lg">Looking for a sweet deal? 😋</p>
        <p className="mt-1 text-gray-600 text-sm md:text-lg">We got you covered.</p>
      </Jumbotron>
      <Layout>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mt-8">
          {offers.map(({ heading, code, subheading, gradient }) => (
            <div
              className={clsx("p-4 bg-gradient-to-br text-white rounded-lg shadow-md", gradient)}
              key={heading}
            >
              <h1 className="text-4xl font-bold text-white">{heading}</h1>
              <p className="mt-2 font-bold text-white">{code}</p>
              <p className="mt-6">{subheading}</p>
            </div>
          ))}
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Offers;
