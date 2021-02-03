import { useState } from "react";
import styles from "../styles/Experiences.module.css";
import Image from "next/image";
import Link from "next/link";

export const Experiences = () => {
  const [readMore, setReadMore] = useState(false);
  const extraContent1 = (
    <p>Stack technique : AngularJS, ABAP, JavaScript, CSS, HTML, lodash</p>
  );
  const extraContent2 = (
    <p>
      Stack Technique : ASP.NET, Hibernate, Spring.net, PMM/PMV, Ajax,
      Knockout.js
    </p>
  );
  const extraContent3 = (
    <p>
      Projets : Refonte d'interface,Ajout des fonctionnalités sur
      l'application mobile du Crédit Mutuel ARKEA <br/>Stack Technique : AngularJS,
      JavaScript, SCSS, HTML, Cordova, Android Natif, Java 6, MySQL
    </p>
  );
  const linkName = readMore ? "En savoir moins" : "En savoir plus";

  return (
    <section className={styles.experiencesContainer} id="experiences">
      <h3 className={styles.titleSection}>Expériences</h3>
      <div className={styles.experiences}>
        <div className={styles.experienceFutur}>
          <div className={styles.image}>
            <Image
              src="/experienceFutur.svg"
              alt="Futur expérience"
              width={220}
              height={220}
            />
          </div>
          <div className={styles.infos}>
            <h4>Et si votre projet était le suivant ?</h4>
            <Link href="/contact">
              <a className={styles.contactButton}>&rarr; Me contacter</a>
            </Link>
          </div>
        </div>
        <div className={styles.experienceOne}>
          <div className={styles.image}>
            <Image
              src="/experience1.svg"
              alt="Expérience 1"
              width={220}
              height={220}
            />
          </div>
          <div className={styles.infos}>
            <h4>Consultant Développeur Front-End</h4>
            <p>
              J'ai intégré une équipe au sein de la DSIRH de L’Oréal afin de
              développer un outil interne. Celui-ci permet de gérer les
              différentes formations proposées aux collaborateurs L’Oréal.{" "}
            </p>
            {readMore && extraContent1}
            <button
              name="En savoir plus"
              className={styles.lien}
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {linkName}
            </button>
          </div>
        </div>
        <div className={styles.experienceTwo}>
          <div className={styles.image}>
            <Image
              src="/experience2.svg"
              alt="Expérience 2"
              width={220}
              height={220}
            />
          </div>
          <div className={styles.infos}>
            <h4>Alternant Développeur Front-End</h4>
            <p>
              Maintenance et évolutions sur un outil dédié aux professionnels du
              groupe BPCE. J’ai développé un outil de démonstration afin de
              promouvoir l'étendu de CE net aux différents clients du groupe.
              Enfin, sur la fin de mon alternance, j'ai eu l'opportunité
              d'étendre mes compétences sur la mise en place d'intégration
              continue au sein de mon équipe.{" "}
            </p>
            {readMore && extraContent2}
            <button name="En savoir plus" className={styles.lien} onClick={() => {
                setReadMore(!readMore);
              }}>
              {linkName}
            </button>
          </div>
        </div>
        <div className={styles.experienceThree}>
          <div className={styles.image}>
            <Image
              src="/experience3.svg"
              alt="Expérience 3"
              width={220}
              height={220}
            />
          </div>
          <div className={styles.infos}>
            <h4>Alternant Développeur Front-End</h4>
            <p>
              J'ai fait partie d'une équipe rattaché au service Banque à
              Distance de la direction des études. Nous étions une équipe Agile
              et pluridisciplinaire d'alternants qui réalisait des projets à
              valeur ajoutée pour l'utilisateur (clients ou salariés).{" "}
            </p>
            {readMore && extraContent3}
            <button name="En savoir plus" className={styles.lien} onClick={() => {
                setReadMore(!readMore);
              }}>
              {linkName}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
