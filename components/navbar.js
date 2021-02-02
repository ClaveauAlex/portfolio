import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import { AiOutlineMenu } from "react-icons/ai";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

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
          <a href={router.pathname === "/contact" ? "/#about" : "#about"}>
            A propos
          </a>
        </li>
        <li>
          <a href={router.pathname === "/contact" ? "/#skills" : "#skills"}>
            Compétences
          </a>
        </li>
        <li>
          <a
            href={
              router.pathname === "/contact" ? "/#experiences" : "#experiences"
            }
          >
            Expériences
          </a>
        </li>
      </ul>
      <Menu menuButton={<MenuButton>Menu</MenuButton>}>
        <MenuItem>
          <a href={router.pathname === "/contact" ? "/#about" : "#about"}>
            A propos
          </a>
        </MenuItem>
        <MenuItem>
          <a href={router.pathname === "/contact" ? "/#skills" : "#skills"}>
            Compétences
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href={
              router.pathname === "/contact" ? "/#experiences" : "#experiences"
            }
          >
            Expériences
          </a>
        </MenuItem>
        <MenuItem>
          <a href="/contact">Contact</a>
        </MenuItem>
      </Menu>
      {/* <div className={styles.menuButton}>
        <AiOutlineMenu />
      </div> */}
      <Link href="/contact">
        <a className={styles.contact}>Me contacter</a>
      </Link>
    </nav>
  );
};
