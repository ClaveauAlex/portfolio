import React from "react";
import styles from "../styles/Experiences.module.css";
import Image from "next/image";
import Link from "next/link";

export const Experiences = () => {
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
            <a className={styles.lien}>En savoir plus</a>
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
            <a className={styles.lien}>En savoir plus</a>
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
              C'est une équipe rattaché au service Banque à Distance de la
              direction des études, nous sommes une équipe Agile et
              pluridisciplinaire d'alternants qui réalise des projets à valeur
              ajoutée pour l'utilisateur (clients ou salariés).{" "}
            </p>
            <a className={styles.lien}>En savoir plus</a>
          </div>
        </div>
      </div>
    </section>
  );
};
