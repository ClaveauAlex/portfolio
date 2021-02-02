import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" href="../favicon.ico" />
          <meta
            name="description"
            content="Développeur Frontend freelance à Brest. Je développe des sites Web, interfaces ainsi que des maquettes."
          />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Alexandre Claveau Portfolio" />
          <meta
            property="og:description"
            content="Développeur Frontend freelance à Brest. Je développe des sites Web, interfaces ainsi que des maquettes."
          />
          <meta property="og:url" content="https://alexandre-claveau.fr" />
          <meta property="og:site_name" content="Alexandre Claveau" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
