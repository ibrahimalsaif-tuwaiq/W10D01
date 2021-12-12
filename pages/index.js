import Head from "next/head";
import styles from "../styles/container.module.css";

const Home = () => {
  return (<>
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Home</h1>
    </div>
    </>
  );
};

export default Home;
