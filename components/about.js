import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";

export const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <h3 className={styles.titleSection}>A propos</h3>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutPartOne}>
          <div className={styles.image}>
            <Image
              src="/illustration1.svg"
              alt="Illustration 1"
              width={400}
              height={400}
            />
          </div>
          <div className={styles.aboutText}>
            <p>
              Vous êtes une <span className={styles.bold}>entreprise</span> ?{" "}
            </p>
            <p>
              Vous cherchez à vous{" "}
              <span className={styles.bold}>faire connaître</span> sur internet
              ? <span className={styles.bold}>Convertir votre audience</span> en
              futur clients ?{" "}
            </p>
            <p>
              Je m'appelle Alexandre Claveau et mon savoir-faire englobe le
              domaine de la programmation{" "}
              <span className={styles.bold}>Web</span> et le{" "}
              <span className={styles.bold}>Design</span>. Je suis un jeune
              Breton qui n'a pas peur des challenges et qui peut être celui que
              vous cherchez. Par mes différentes expériences, j'ai pu{" "}
              <span className={styles.bold}>assister des entreprises</span> dans
              la réalisation de leur site Web ou dans le développement
              d'interfaces clients. Mais pas seulement ! J'ai pu également les{" "}
              <span className={styles.bold}>accompagner</span> dans leurs choix
              afin de leur indiquer la meilleur façon d'arriver à leurs
              objectifs.{" "}
            </p>
          </div>
        </div>
        <div className={styles.aboutPartTwo}>
          <div className={styles.image}>
            <Image
              src="/illustration2.svg"
              alt="Illustration 2"
              width={400}
              height={400}
            />
          </div>
          <div className={styles.aboutText}>
            <p>
              En d'autres termes, je développe votre projet en mettant en place
              une <span className={styles.bold}>stratégie rigoureuse</span> :{" "}
            </p>
            <p>
              Tout d'abord, un premier rendez-vous pour comprendre vos attentes
              et établir un cahier des charges.{" "}
            </p>
            <p>
              Ensuite, je vous proposerai une maquette réaliste du projet pour
              vous permettre de vous projeter. Ainsi, je mettrai en place une
              gestion de projet basée sur la méthode Agile. Celle-ci permettra
              d'avoir une meilleur vision de votre projet sur le long terme et
              une meilleur communication.{" "}
            </p>
            <p>
              Enfin, sur différentes itérations je vais développer votre projet
              avec des technologies tel que React. Il s'agit d'une bibliothèque
              permettant de faciliter la création d'application Web par
              l'intermédiaire de composants.{" "}
            </p>
          </div>
        </div>
        <div className={styles.aboutPartThree}>
          <div className={styles.image}>
            <Image
              src="/illustration3.svg"
              alt="Illustration 3"
              width={400}
              height={400}
            />
          </div>
          <div className={styles.aboutText}>
            <p>
              Alors n'hésitez pas à me{" "}
              <span className={styles.bold}>contacter</span> afin d'en discuter.{" "}
            </p>
            <p>
              Si vous avez encore des doutes sur la démarche, il vous suffit de
              regarder autour de vous. Certaines entreprises ont des{" "}
              <span className={styles.bold}>
                sites ou plateformes mal réalisés
              </span>
              . On retrouve un grand nombre qui investissent aujourd'hui
              beaucoup afin de développer le même projet mais différemment. Ce
              retour arrière est généralement lié à une{" "}
              <span className={styles.bold}>
                mauvaise gestion de l'expérience utilisateur
              </span>
              , ou un{" "}
              <span className={styles.bold}>
                changement brutale de technologies
              </span>
              .{" "}
            </p>
            <p>
              Voilà pourquoi, je peux vous permettre d'
              <span className={styles.bold}>augmenter votre audience</span>
              {" "}afin de la{" "}
              <span className={styles.bold}>convertir en clients</span> et ainsi
              éviter d'éventuel problèmes.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
