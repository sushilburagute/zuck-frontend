import { NextPage } from "next";
import { Navbar, SEO, Footer, Layout, Card, Jumbotron } from "../../components";
import { useQuery } from "react-query";
import axios from "axios";
import Spinner from "./../../components/Spinner/Spinner";
import { SearchIcon } from "@heroicons/react/outline";
import { ChangeEvent, useState } from "react";
import { IDish, DishType } from "../../types/IDish";
import Image from "next/image";
import clsx from "clsx";

const Search: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<String>("");
  const [searchResult, setSearchResult] = useState<[IDish] | [] | null>(null);
  const { isLoading, isError, data, error } = useQuery("dishes", () =>
    axios("http://localhost:5000/api/food")
  );

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
      <SEO title="Search | Zuck" />
      <Navbar />
      <div className="block sm:hidden">
        <Jumbotron gradient="bg-white">
          <h1 className="text-3xl font-bold text-gray-800">Search</h1>
          <p className="mt-2 text-gray-600">Looking for something particular?</p>
        </Jumbotron>
      </div>
      <Layout>
        <div className="py-3 sm:py-16 rounded-md flex justify-center bg-gradient-to-r from-[#ffa632] to-[#f76a28]">
          <form onSubmit={handleSubmit} className="flex w-full md:w-1/2 px-2">
            <div className="flex w-full">
              <input
                className=" w-full px-4 py-3 placeholder-white border font-bold border-gray-300 rounded-md bg-white bg-opacity-10 text-sm shadow-sm appearance-none focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-md text-white hover:bg-opacity-20"
                placeholder="Looking for something particular?"
                id="search-input"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setSearchQuery(e.target.value);
                }}
              />
              <button
                className=" py-2 px-4 bg-white text-white rounded ml-2 inline-flex font- justify-center items-center bg-opacity-10 focus:ring-brand-500 focus:border-brand-500 hover:bg-opacity-20"
                type="submit"
              >
                <SearchIcon className="w-6 h-6 text-white" />
              </button>
            </div>
          </form>
        </div>
        <div>
          {!data || isLoading ? (
            <div className="w-full inline-flex justify-center items-center">
              <Spinner />
            </div>
          ) : searchResult === null ? (
            <div className="w-full inline-flex justify-center items-center">
              <div>
                <Image src={"/search.png"} alt="Man searching for items" width={400} height={400} />
              </div>
            </div>
          ) : searchResult.length === 0 ? (
            <div className="w-full inline-flex justify-center items-center">
              <div>
                <Image src={"/empty.png"} alt="No Items found" width={400} height={400} />
                <p className="text-center text-gray-600">Sorry, we don&apos;t serve that item</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mt-4">
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
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Search;
