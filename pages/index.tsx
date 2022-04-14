import React from 'react';
import HomePage from '@/components/homepage';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import { getAllFilesFrontMatter } from '@/lib/mdx';

const meta = {
  type: 'website',
  title: 'My personal portfolio',
  summary: 'I will post my learning and projects here'
};

const Home = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Saiful | Home</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.summary} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://saifuls.xyz${router.asPath}`} />
        <link rel="canonical" href={`https://saifuls.xyz${router.asPath}`} />
        <meta property="og:site_name" content="saifuls" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content="https://saifuls.xyz/myself.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@saiful70_" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.summary} />
        <meta name="twitter:image" content="https://saifuls.xyz/myself.png" />
      </Head>
      <HomePage />
    </>
  );
};

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter('blog');

//   return { props: { posts } };
// }

export default Home;
