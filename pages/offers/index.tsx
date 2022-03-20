import { NextPage } from "next";
import { Navbar, Footer, Layout } from "./../../components/index";
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
      <Layout>
        <div className="inline-flex justify-center py-16 bg-brand-100 rounded-sm">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-brand-600 text-center tracking-tighter">
              Looking for a sweet deal? 😋
            </h1>
            <h2 className="text-sm md:text-md text-gray-500 text-center mt-3">
              We got you covered.
            </h2>
          </div>
        </div>
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
