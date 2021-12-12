import axios from "axios";
import Head from "next/head";
import Link from "next/Link";
import styles from "../../styles/posts.module.css";

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return {
    props: { posts: res.data },
  };
}

const Posts = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
        <meta name="description" content="posts page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Posts</h1>
      <div className={styles.cards}>
        {posts.map((post) => {
          return (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <div className={styles.card}>
                <p className={styles.cardTitle}>{post.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
