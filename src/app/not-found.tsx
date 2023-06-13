import styles from "../styles/404.module.sass";

import Image from "next/image";

import NotFoundImage from "@/assets/404.png";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Image src={NotFoundImage} alt="company logo" width={350} height={350} />
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
