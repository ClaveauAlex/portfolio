import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.moi}>
        <Image
          src="/me-design.svg"
          alt="Alexandre Claveau"
          width={700}
          height={700}
        />
      </div>
      <div>
        <h1>Je m'appelle Alexandre Claveau</h1>
        <h3 className={styles.subSection}>
          <span className={styles.firstSubsection}>Développeur</span>{" "}
          <span className={styles.secondSubsection}>Frontend</span>
        </h3>
        <p>
          J'aide les entreprises à <span className={styles.bold}>créer</span> ou{" "}
          <span className={styles.bold}>améliorer</span> leur site Web pour{" "}
          <span className={styles.bold}>convertir</span> plus de visiteurs en{" "}
          clients.
        </p>
      </div>
    </section>
  );
}
