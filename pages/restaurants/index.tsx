import { NextPage } from "next";
import { Navbar, Layout, Jumbotron, SortBar, Card, SEO } from "./../../components/index";

const Restaurants: NextPage = () => {
  return (
    <>
      <SEO title="Restaurants | Zuck" />
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
        <SortBar />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 sm:grid-cols-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Layout>
    </>
  );
};

export default Restaurants;
