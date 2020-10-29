import Head from "next/head";
import { Resume } from "../components/resume";
import Data from "../data/resume.json";

const Home = () => {
  return (
    <>
      <Head>
        <title>{Data.title}</title>
        <meta name="author" content="Arnaud P. Crowther" />
      </Head>
      <main>
        <Resume></Resume>
      </main>
    </>
  );
};
export default Home;
