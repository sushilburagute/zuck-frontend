import { NextPage } from "next";
import { useRouter } from "next/router";

import { Navbar, Layout, Jumbotron, SortBar, Card, SEO } from "./../../components/index";

const RestaurantPage: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <SEO title="Restaurants | Zuck" />
      <Navbar />
      <h1>Restaurant Page</h1>
      <p>Product: {pid}</p>
    </>
  );
};

export default RestaurantPage;
