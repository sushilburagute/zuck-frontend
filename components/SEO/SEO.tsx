import Head from "next/head";

// TODO: Add more meta tags

interface IProps {
  title: string;
}

const SEO = ({ title }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
};

export default SEO;
