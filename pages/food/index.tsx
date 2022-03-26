import axios from "axios";
import { NextPage, NextPageContext } from "next";
import { useQuery } from "react-query";
import { Navbar, Layout, Jumbotron, SortBar, Card, SEO, Footer } from "../../components/index";
import Spinner from "../../components/Spinner/Spinner";
import { IDish } from "../../types/IDish";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { stagger } from "./../../animation/stagger";
import { fadeInUp } from "../../animation/fadeInUp";

interface IProps {
  data: IDish[];
}

const Food: NextPage<IProps> = ({ data }) => {
  const [dishData, setdishData] = useState<IDish[] | undefined>(data);
  const [sortedDishes, setsortedDishes] = useState<IDish[] | undefined>(data);

  return (
    <>
      <SEO title="Food" />
      <Navbar />
      <Jumbotron gradient="bg-gradient-to-br from-brand-400 to-brand-600">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          exit="exit"
          className=" flex justify-center sm:justify-between"
        >
          <motion.div variants={fadeInUp} className="">
            <Image src="/foodBanner-1.png" alt="Promo Image" height={250} width={250} />
          </motion.div>
          <motion.div variants={fadeInUp} className=" hidden sm:block">
            <Image src="/foodBanner-2.png" alt="Promo Image" height={250} width={250} />
          </motion.div>
          <motion.div variants={fadeInUp} className=" hidden lg:block ">
            <Image src="/foodBanner-3.png" alt="Promo Image" height={250} width={250} />
          </motion.div>
          <motion.div variants={fadeInUp} className=" hidden xl:block">
            <Image src="/foodBanner-4.png" alt="Promo Image" height={250} width={250} />
          </motion.div>
        </motion.div>
      </Jumbotron>
      <Layout>
        <SortBar
          totalDishes={sortedDishes?.length}
          dishData={dishData}
          sortedDishes={sortedDishes}
          setsortedDishes={setsortedDishes}
        />

        {sortedDishes === undefined ? (
          <Spinner />
        ) : (
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
            className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2"
          >
            {sortedDishes.map((dish: IDish) => {
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
                  key={dish.name}
                />
              );
            })}
          </motion.div>
        )}
      </Layout>
      <Footer />
    </>
  );
};

Food.getInitialProps = async () => {
  const res = await axios.get("https://zuck-backend.up.railway.app/api/food");
  const data = await res.data.allDishes;
  return { data };
};

export default Food;
