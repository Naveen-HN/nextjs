import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="web developement, nextjs, programming" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
