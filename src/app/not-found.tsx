import styles from "../styles/404.module.sass";

import Image from "next/image";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Image src="/404.png" alt="company logo" width={350} height={350} />
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>
        Oops! The page you&apos;re looking for does not exist.
      </p>
      <a href="/" className={styles.link}>
        Go back to the homepage
      </a>
    </div>
  );
}
