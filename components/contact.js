import React from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import Link from "next/link";

export const Contact = () => {
  const linkedinUrl = "https://www.linkedin.com/in/alexandre-claveau/";
  const instagramUrl = "https://www.instagram.com/alexandre_claveau.me/";

  return (
    <section className={styles.contactContainer}>
      <div className={styles.moi}>
        <Image
          src="/me-design.svg"
          alt="Alexandre Claveau"
          width={700}
          height={700}
        />
      </div>
      <div>
        <h1>
          Et si on travaillait <span className={styles.bold}>ensemble</span> ?
        </h1>
        <div>
          <a href="mailto:alexandre.claveau.pro@gmail.com">
            alexandre.claveau.pro@gmail.com
          </a>
          <a href="tel:+33648341409">06 48 34 14 09</a>
        </div>
        <ul>
          <li>
            <Link href={linkedinUrl} target="_blank">
              linkedin.fr/claveau
            </Link>
          </li>
          <li>
            <Link href={instagramUrl} target="_blank">
              alexandre_claveau.me
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};