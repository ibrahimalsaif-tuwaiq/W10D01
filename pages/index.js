import Head from "next/head";
import Image from "next/image";
import styles from "../styles/container.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Home</div>
    </div>
  );
};

export default Home;
