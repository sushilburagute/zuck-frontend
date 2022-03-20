import { NextPage } from "next";
import { Navbar, SEO, Footer, Layout, Card } from "../../components";
import { useQuery } from "react-query";
import axios from "axios";
import Spinner from "./../../components/Spinner/Spinner";
import { SearchIcon } from "@heroicons/react/outline";
import { ChangeEvent, useState } from "react";
import { IDish, DishType } from "../../types/IDish";

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
      <Layout>
        <div className="py-8 rounded-md flex justify-center bg-brand-100">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <input
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                placeholder="So what can we serve you?"
                id="search-input"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setSearchQuery(e.target.value);
                }}
              />
              <button
                className=" py-2 px-4 bg-brand-500 text-white rounded ml-2 inline-flex align-middle font-bold"
                type="submit"
              >
                <SearchIcon className="w-6 h-6  " />
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mt-4">
          {searchResult === undefined && <p>Search for Something!</p>}
          {!data || isLoading ? (
            <Spinner />
          ) : searchResult === null ? (
            <p>Search for Something!</p>
          ) : searchResult.length === 0 ? (
            <p>Sorry, we don&apos;t serve that item</p>
          ) : (
            searchResult.map((dish: IDish) => {
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
            })
          )}
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Search;
