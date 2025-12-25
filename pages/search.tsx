import { NextPage } from "next";
import { Navbar, SEO, Footer, Layout, Card, Jumbotron } from "../components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../components/Spinner/Spinner";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";
import { IDish } from "../types/IDish";
import Image from "next/image";
import { stagger } from "./../animation/stagger";
import { motion } from "framer-motion";
import { fadeInUp } from "../animation/fadeInUp";

const Search: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<[IDish] | [] | null>(null);
  const { isLoading, isError, data } = useQuery({
    queryKey: ["dishes"],
    queryFn: () => axios.get("https://zuck-backend.up.railway.app/api/food"),
  });

  if (isError)
    return (
      <>
        <div>Something went wrong!</div>
      </>
    );

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const result: [IDish] = data?.data.allDishes.filter(
      (dish: IDish) =>
        dish.name.toLocaleLowerCase("en-US") == searchQuery.toLocaleLowerCase("en-US")
    );
    setSearchResult([...result]);
  }

  return (
    <>
      <SEO title="Search" />
      <Navbar />
      <div className="block sm:hidden">
        <Jumbotron gradient="bg-white">
          <h1 className="text-3xl font-bold text-gray-800">Search</h1>
          <p className="mt-2 text-gray-600">Looking for something particular?</p>
        </Jumbotron>
      </div>
      <Layout>
        <div className="py-3 sm:py-16 rounded-md flex justify-center bg-gradient-to-r from-[#ffa632] to-[#f76a28]">
          <form onSubmit={handleSubmit} className="flex w-full px-2 md:w-1/2">
            <div className="flex w-full">
              <input
                className="w-full px-4 py-3 text-sm font-bold text-white placeholder-white bg-white border border-gray-300 rounded-md shadow-sm appearance-none bg-opacity-10 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-md hover:bg-opacity-20"
                placeholder="Looking for something particular?"
                id="search-input"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setSearchQuery(e.target.value);
                }}
              />
              <button
                className="inline-flex items-center justify-center px-4 py-2 ml-2 text-white bg-white rounded font- bg-opacity-10 focus:ring-brand-500 focus:border-brand-500 hover:bg-opacity-20"
                type="submit"
              >
                <MagnifyingGlassIcon className="w-6 h-6 text-white" />
              </button>
            </div>
          </form>
        </div>
        <motion.div variants={stagger} initial="initial" animate="animate" exit="exit">
          {!data || isLoading ? (
            <div className="inline-flex items-center justify-center w-full">
              <Spinner />
            </div>
          ) : searchResult === null ? (
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center justify-center w-full"
            >
              <div>
                <Image src={"/search.png"} alt="Man searching for items" width={400} height={400} />
              </div>
            </motion.div>
          ) : searchResult.length === 0 ? (
            <div className="inline-flex items-center justify-center w-full">
              <div>
                <Image src={"/empty.png"} alt="No Items found" width={400} height={400} />
                <p className="text-center text-gray-600">Sorry, we don&apos;t serve that item</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 mt-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
              {searchResult.map((dish: IDish) => {
                return (
                  <Card
                    _id={dish._id}
                    name={dish.name}
                    imageSrc={dish.image}
                    type={dish.type}
                    rating={dish.rating}
                    deliveryTime={dish.deliveryTime}
                    price={dish.price}
                    veg={dish.veg}
                    discount={dish.discount}
                    key={dish._id}
                  />
                );
              })}
            </div>
          )}
        </motion.div>
      </Layout>
      <Footer />
    </>
  );
};

export default Search;
