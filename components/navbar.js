import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const router = useRouter();
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
          <a href={router.pathname === "/contact" ? "/#about" : "#about"}>A propos</a>
        </li>
        <li>
          <a href={router.pathname === "/contact" ? "/#skills" : "#skills"}>Compétences</a>
        </li>
        <li>
          <a href={router.pathname === "/contact" ? "/#experiences" : "#experiences"}>Expériences</a>
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
