import axios from "axios";
import { NextPage } from "next";
import { useQuery } from "react-query";
import { Navbar, Layout, Jumbotron, SortBar, Card, SEO, Footer } from "../../components/index";
import Spinner from "../../components/Spinner/Spinner";
import { IDish } from "../../types/IDish";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Food: NextPage = () => {
  const { isLoading, isError, data, error } = useQuery("dishes", () =>
    axios("http://localhost:5000/api/food")
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
      <SEO title="Food" />
      <Navbar />
      <Jumbotron gradient="bg-gradient-to-br from-brand-400 to-brand-600">
        <div className=" flex justify-center sm:justify-between">
          <div className="">
            <Image src="/foodBanner-1.png" alt="Promo Image" height={250} width={250} />
          </div>
          <div className=" hidden sm:block">
            <Image src="/foodBanner-2.png" alt="Promo Image" height={250} width={250} />
          </div>
          <div className=" hidden lg:block ">
            <Image src="/foodBanner-3.png" alt="Promo Image" height={250} width={250} />
          </div>
          <div className=" hidden xl:block">
            <Image src="/foodBanner-4.png" alt="Promo Image" height={250} width={250} />
          </div>
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
