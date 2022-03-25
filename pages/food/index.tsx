import axios from "axios";
import { NextPage } from "next";
import { useQuery } from "react-query";
import { Navbar, Layout, Jumbotron, SortBar, Card, SEO, Footer } from "../../components/index";
import Spinner from "../../components/Spinner/Spinner";
import { IDish } from "../../types/IDish";
import { useState, useEffect } from "react";

const Food: NextPage = () => {
  const { isLoading, isError, data, error } = useQuery("dishes", () =>
    axios("https://zuck-backend.up.railway.app/api/food")
  );

  const [dishData, setdishData] = useState<IDish[] | undefined>(undefined);
  const [sortedDishes, setsortedDishes] = useState<IDish[] | undefined>(undefined);

  useEffect(() => {
    if (!isLoading) {
      setdishData(data?.data.allDishes);
      setsortedDishes(data?.data.allDishes);
    }
  }, [data, isLoading]);

  if (isError)
    return (
      <>
        <div>Error!</div>
      </>
    );

  return (
    <>
      <SEO title="Food | Zuck" />
      <Navbar />
      <Jumbotron gradient="bg-gradient-to-br from-brand-400 to-brand-600">
        <div className="flex justify-between">
          <div className="w-64 h-64 bg-white rounded-md shadow-lg"></div>
          <div className="w-64 h-64 bg-white rounded-md shadow-lg"></div>
          <div className="w-64 h-64 bg-white rounded-md shadow-lg"></div>
          <div className="w-64 h-64 bg-white rounded-md shadow-lg"></div>
        </div>
      </Jumbotron>
      <Layout>
        <SortBar
          totalDishes={sortedDishes?.length}
          dishData={dishData}
          sortedDishes={sortedDishes}
          setsortedDishes={setsortedDishes}
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
          {sortedDishes === undefined ? (
            <Spinner />
          ) : (
            sortedDishes.map((dish: IDish) => {
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

export default Food;
