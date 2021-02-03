import styles from "../styles/Cta.module.css";
import Link from "next/link";

export const Cta = () => {
  return (
    <section className={styles.ctaContainer}>
      <div className={styles.cta}>
        <h4>Vous avez un projet ?</h4>
        <Link href="/contact">
          <a className={styles.contactButton}>Me contacter</a>
        </Link>
      </div>
    </section>
  );
}
