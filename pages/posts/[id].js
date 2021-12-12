import axios from "axios";
import Head from "next/head";
import styles from "../../styles/post.module.css";

export async function getStaticPaths() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  const paths = res.data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  return {
    props: { post: res.data },
  };
}

const Post = ({ post }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Post - {post.title}</title>
        <meta name="description" content="post page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        <p className={styles.cardBody}>{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
