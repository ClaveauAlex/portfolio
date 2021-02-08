import React from "react";
import Head from "next/head";
import {Navbar} from "../components/navbar";
import {Contact} from "../components/contact";
import styles from "../styles/Home.module.css";

const pageContact = () => {
  return (
    <>
      <Head>
        <title>Alexandre Claveau - Reactjs Nextjs Développeur</title>
      </Head>
      <Navbar></Navbar>
      <main className={styles.mainContainer}>
        <Contact></Contact>
      </main>
    </>
  );
}

export default pageContact;
