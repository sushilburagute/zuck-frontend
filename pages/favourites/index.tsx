import { NextPage } from "next";
import { Navbar, Jumbotron, SEO, Layout, Card, Footer } from "./../../components/index";

const Favourites: NextPage = () => {
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 sm:grid-cols-2"></div>
      </Layout>
      <Footer />
    </>
  );
};

export default Favourites;
