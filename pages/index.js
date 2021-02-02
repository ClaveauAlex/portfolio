import React from "react";
import Head from "next/head";
import {Navbar} from "../components/navbar";
import {Hero} from "../components/hero";
import {About} from "../components/about";
import {Skills} from "../components/skills";
import {Experiences} from "../components/experiences";
import {Testimonials} from "../components/testimonials";
import {Cta} from "../components/cta";
import {Footer} from "../components/footer";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Accueil portfolio</title>
      </Head>
      <Navbar></Navbar>
      <main className={styles.mainContainer}>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Experiences></Experiences>
        <Testimonials></Testimonials>
        <Cta></Cta>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
