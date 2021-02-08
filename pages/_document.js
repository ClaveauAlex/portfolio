import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" href="../favicon.ico" />
          <meta charset="utf-8" />
          <meta name="author" content="Alexandre Claveau"/>
          <meta
            name="description"
            content="Je suis Alexandre Claveau et développeur Frontend freelance à Brest. Je développe des sites Web, interfaces ainsi que des maquettes."
          />
          <meta
            name="keywords"
            content="Alexandre Claveau, Alexandre, Claveau, Alex Claveau, alexclaveau, claveau, claveau developer, claveau développeur, Alexandre Développeur, Developer, Web Developer, Reactjs / Nextjs Developer, Web, Développeur, Développeur Web, Developpeur Web, Full Stack, Full Stack Developer, Développeur Full Stack, ISEN, ISEN Brest, Olympp, ITCE, ARKEA, OpenClassrooms, Developer, Bootstrap, CSS3, Git, HTML5, Javascript, Linux, MySQL, Node.js, Reactjs, Nextjs, Node, Freelance Developer, Développeur Freelance, Best web developer, Best Freelance Developer, Experienced developer, Meilleur développeur freelance, Figma, UX, UI, maquette, Brest"
          ></meta>
          <meta property="og:title" content="Alexandre Claveau - Reactjs Nextjs Développeur" />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:type" content="website" />
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
          <title>Alexandre Claveau - Reactjs Nextjs Développeur</title>
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
