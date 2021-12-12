import Head from 'next/head'
import styles from '../styles/container.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="about page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>About</div>
    </div>
  );
}

export default About;
