import Head from "next/head";
import styles from "../../styles/container.module.css";

const Posts = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
        <meta name="description" content="posts page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Posts</div>
    </div>
  );
};

export default Posts;
