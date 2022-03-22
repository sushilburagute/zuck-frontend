import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import { useQuery } from "react-query";
import { Navbar, Jumbotron, SEO, Layout, Card, Footer } from "./../../components/index";
import { UserContext } from "./../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { IDish } from "../../types/IDish";

const Favourites: NextPage = () => {
  const { user } = useContext(UserContext);

  const { isLoading, isError, data, error } = useQuery("favourites", () =>
    axios("http://localhost:5000/api/user/favourites/", {
      headers: {
        "x-auth-token": user.token,
      },
    })
  );

  const [favDishes, setfavDishes] = useState<IDish[] | undefined>(undefined);

  useEffect(() => {
    if (!isLoading) {
      setfavDishes(data?.data.foodFavourites);
    }
  }, [data, isLoading]);

  return (
    <>
      <SEO title="Favourites | Zuck" />
      <Navbar />
      <Jumbotron gradient="bg-white">
        <h1 className="text-3xl font-bold text-gray-800">Favourites</h1>
        <p className="mt-2 text-gray-600">
          Dishes which are close to your heart will show up here.
        </p>
      </Jumbotron>
      <Layout>
        {favDishes !== undefined && favDishes?.length === 0 && (
          <div className="w-full inline-flex justify-center items-center">
            <div>
              <Image src={"/favfood.png"} alt="Your Favourite food!" width={400} height={400} />
              <p className="text-center text-gray-600">Items you heart will show up here</p>
            </div>
          </div>
        )}
        {favDishes !== undefined && favDishes?.length > 0 && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
            {favDishes.map((dish: IDish) => {
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
      </Layout>
      <Footer />
    </>
  );
};

export default Favourites;
