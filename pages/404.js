import Head from 'next/head'
import styles from '../styles/container.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Error - 404</title>
        <meta name="description" content="error 404 page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Error - 404</h1>
    </div>
  );
}

export default About;
