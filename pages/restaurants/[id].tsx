import { NextPage } from "next";
import { useRouter } from "next/router";

export const RestaurantPage: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <h1>Restaurant Page</h1>
      <p>Product: {pid}</p>
    </>
  );
};
