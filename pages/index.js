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

export const informations = {
  name: "Alexandre Claveau",
  siteTitle: "Alexandre Claveau Portfolio",
  description:
    "Développeur Frontend freelance à Brest. Je développe des sites Web, interfaces ainsi que des maquettes.",
  url: "https://alexandre-claveau.fr",
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>{informations.siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={informations.description} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={informations.siteTitle} />
        <meta property="og:description" content={informations.description} />
        <meta property="og:url" content={informations.url} />
        <meta property="og:site_name" content={informations.name} />
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
