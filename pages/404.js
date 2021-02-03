import Link from "next/link";
import Image from "next/image";
import styles from "../styles/404.module.css";

export default function Custom404() {
  return (
    <div className={styles.erreurContainer}>
      <h1>
        <span className={styles.titleBold}>Oups</span> ...
      </h1>
      <p>La page que vous recherchez n'existe pas ou plus.</p>
      <div className={styles.returnButton}>
        <Link href="/">
          <a>Retournez à l'accueil</a>
        </Link>
      </div>
      <div>
        <Image src="/404.svg" alt="Erreur 404" width={600} height={600} />
      </div>
    </div>
  );
}
