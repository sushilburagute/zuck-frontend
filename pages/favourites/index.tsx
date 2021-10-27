import { NextPage } from "next";
import { Navbar } from "./../../components/index";

const Favourites: NextPage = () => {
  return (
    <>
      <Navbar />
      <div>Favourites</div>
      <footer>Footer links</footer>
    </>
  );
};

export default Favourites;
