import Link from 'next/link';
import react from "react";
import styles from '../styles/Header.module.css';

const Header = () => {
  const image = "./public/images/logo.jpeg"
  return (
    <header className={styles.header}>
      <img src='images/logo.jpeg' alt="logo de la empresa" className={styles.logo}/>
      <div className={styles.buttons}>
        <Link href="/login">
          <button className={styles.button}>Log In</button>
        </Link>
        <Link href="/chatbot">
          <button className={styles.button}>Haz el Test</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
