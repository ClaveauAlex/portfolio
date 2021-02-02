import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Experiences from "../components/experiences";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexandre Claveau Portfolio</title>
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
    </div>
  );
}
