import React from "react";
import styles from "../styles/Testimonials.module.css";
import Image from "next/image";
import Carousel from "react-elastic-carousel";

export const Testimonials = () => {
  return (
    <section className={styles.testimonialsContainer}>
      <h3>Témoignages</h3>
      <div className={styles.carrousselContainer}>
        <Carousel itemsToShow={1} className={styles.styling}>
          <div className={styles.item}>
            <p>
              Fortement intéressé par les nouvelles technologies et par les
              défis qu'elles permettent de relever, Alexandre sait s'investir
              sur un projet. Il possède en outre une grande facilité de
              communication, ce qui fait de lui un top Freelance. Je le
              recommande chaudement !{" "}
            </p>
            <div className={styles.portrait}>
              <Image
                src="/maximilien.png"
                alt="Maximilien Meyer"
                className={styles.image}
                width={80}
                height={80}
              />
            </div>
            <p className={styles.bold}>Maximilien Meyer</p>
          </div>
          <div className={styles.item}>
            <p>
              Très professionnel, Alexandre est une personne avec un grand sens
              de l'écoute, une bonne compréhension des besoins clients et doté
              d'une très bonne maîtrise des technologies. Sa rapidité
              d'exécution permet d'itérer et trouver la meilleure solution pour
              une expérience utilisateur parfaite.{" "}
            </p>
            <div className={styles.portrait}>
              <Image
                src="/elodie.png"
                alt="Elodie Petitbon"
                className={styles.image}
                width={80}
                height={80}
              />
            </div>
            <p className={styles.bold}>Elodie Petitbon</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};
