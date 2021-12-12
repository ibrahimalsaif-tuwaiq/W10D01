import Head from "next/head";
import NavBar from "./components/NavBar";
import styles from "../styles/container.module.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <Head>
        <title>Home</title>
        <meta name="description" content="home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home</h1>
      </div>
    </>
  );
};

export default Home;
