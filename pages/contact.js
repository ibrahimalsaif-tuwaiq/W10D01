import Head from 'next/head'
import styles from '../styles/container.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Contact</div>
    </div>
  );
}

export default Contact;
