import { NextPage } from "next";
import { Navbar, SEO } from "../../components";

const Search: NextPage = () => {
  return (
    <>
      <SEO title="Search | Zuck" />
      <Navbar />
      <div>Search</div>
      <footer>Footer links</footer>
    </>
  );
};

export default Search;
