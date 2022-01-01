import { NextPage } from "next";
import { Navbar, SEO, Footer, Layout } from "../../components";

const Search: NextPage = () => {
  return (
    <>
      <SEO title="Search | Zuck" />
      <Navbar />
      <Layout>
        <div className="mt-8 flex justify-center">
          <input className="border-2 rounded border-brand-400" />
          <button className=" py-2 px-5 bg-brand-500 text-white rounded ml-2">Search</button>
        </div>
        <div className="mt-8">List gets rendered here</div>
      </Layout>
      <Footer />
    </>
  );
};

export default Search;
