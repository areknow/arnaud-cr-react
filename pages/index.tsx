import Head from "next/head";
import { Resume } from "../components/resume";
import Data from "../data/resume.json";

const Home = () => {
  return (
    <>
      <Head>
        <title>{Data.title}</title>
        <meta name="author" content="Arnaud P. Crowther" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>
      <main>
        <Resume></Resume>
      </main>
    </>
  );
};
export default Home;
