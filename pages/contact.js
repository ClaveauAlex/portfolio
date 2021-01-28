import Link from "next/link";
import Head from "next/head";
import {informations} from './index';

export default function Contact() {
  return (
    <>
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
      <h1>Contact Page</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
