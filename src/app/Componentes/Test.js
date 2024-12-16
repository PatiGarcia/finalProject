
import React from "react";
import styles from "../styles/Test.module.css";
import Image from "next/image";
import Link from "next/link";

const Test = () => {
  return (
    <section className={styles.testSection}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Descubre más sobre ti</h2>
          <p>
            Nuestro test está diseñado para ayudarte a reflexionar y comprender
            mejor tus necesidades emocionales.
          </p>
          <Link href="/test">
            <button className={styles.button}>Realizar Test</button>
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/test.png"
            alt="Ilustración del test"
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Test;
