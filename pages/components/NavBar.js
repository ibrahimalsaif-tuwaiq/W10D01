import Link from 'next/link'
import styles from "../../styles/navbar.module.css";

const NavBar = () => {
  return (
    <>
      <ul className={styles.nav}>
        <Link href="/"><li className={styles.navItem}>Home</li></Link>
        <Link href="/about"><li className={styles.navItem}>About</li></Link>
        <Link href="/contact"><li className={styles.navItem}>Contact</li></Link>
        <Link href="/posts"><li className={styles.navItem}>Posts</li></Link>
      </ul>
    </>
  );
};

export default NavBar;
