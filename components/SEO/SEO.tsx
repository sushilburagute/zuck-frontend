import Head from "next/head";

// TODO: Add more meta tags

interface IProps {
  title: string;
}

const SEO = ({ title }: IProps) => {
  return (
    <>
      <Head>
        <title>Zuck | {title}</title>
        <meta name="title" content={`Zuck | ${title}`} />
        <meta
          name="description"
          content="Looking to grab a quick bite? Zuck's here to deliver you the perfect meal."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zuck-food.vercel.app/" />
        <meta property="og:title" content={`Zuck | ${title}`} />
        <meta
          property="og:description"
          content="Looking to grab a quick bite? Zuck's here to deliver you the perfect meal."
        />
        <meta property="og:image" content="/meta.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://zuck-food.vercel.app/" />
        <meta property="twitter:title" content={`Zuck | ${title}`} />
        <meta
          property="twitter:description"
          content="Looking to grab a quick bite? Zuck's here to deliver you the perfect meal."
        />
        <meta property="twitter:image" content="/meta.png" />

        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </>
  );
};

export default SEO;
