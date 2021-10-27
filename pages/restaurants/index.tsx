import { NextPage } from "next";
import { Navbar, Layout } from "./../../components/index";
import Image from "next/image";
import Jumbotron from "./../../components/Jumbotron/Jumbotron";

const Restaurants: NextPage = () => {
  return (
    <>
      <Navbar />
      <Jumbotron gradient="bg-gradient-to-r from-yellow-400 to-brand-400">
        <div className="flex justify-between">
          <div className="w-64 h-64 bg-white rounded-md shadow-lg"></div>
          <div className="w-64 h-64 bg-white rounded-md shadow-lg"></div>
          <div className="w-64 h-64 bg-white rounded-md shadow-lg"></div>
          <div className="w-64 h-64 bg-white rounded-md shadow-lg"></div>
        </div>
      </Jumbotron>
      <Layout>
        <h1>Hey this works!</h1>
      </Layout>
    </>
  );
};

export default Restaurants;
