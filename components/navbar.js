import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>
          <Image
            src="/Logo_bubble.svg"
            alt="Logo entreprise"
            className={styles.logo}
            width={40}
            height={40}
          />
        </a>
      </Link>
      <ul className={styles.links}>
        <li>
          <a href="#about">A propos</a>
        </li>
        <li>
          <a href="#skills">Compétences</a>
        </li>
        <li>
          <a href="#experiences">Expériences</a>
        </li>
      </ul>
      <div className={styles.menu}>
        <AiOutlineMenu />
      </div>
      <Link href="/contact">
        <a className={styles.contact}>Me contacter</a>
      </Link>
    </nav>
  );
}
