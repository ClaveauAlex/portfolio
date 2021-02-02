import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  const linkedinUrl = "https://www.linkedin.com/in/alexandre-claveau/";
  const instagramUrl = "https://www.instagram.com/alexandre_claveau.me/";

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.site}>
        <p className={styles.bold}>Ce site</p>
        <p>Fait à la main avec React, Nextjs & CSS.</p>
        <p>© Alexandre Claveau {new Date().getFullYear()}</p>
      </div>
      <div className={styles.links}>
        <p className={styles.bold}>Liens</p>
        <ul className={styles.liste}>
          <li>
            <Link href="#about">
              <a>A propos</a>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <a>Compétences</a>
            </Link>
          </li>
          <li>
            <Link href="#experiences">
              <a>Expériences</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Me contacter</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.social}>
        <p className={styles.bold}>Retrouvez-moi ailleurs</p>
        <ul className={styles.socialContainer}>
          <li className={styles.linkSocial}>
            <AiFillLinkedin />
            <a href={linkedinUrl} target="_blank">
              linkedin.fr/claveau
            </a>
          </li>
          <li className={styles.linkSocial}>
            <AiFillInstagram />
            <a href={instagramUrl} target="_blank">
              alexandre_claveau.me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
