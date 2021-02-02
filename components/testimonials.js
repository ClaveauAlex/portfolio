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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              mauris diam massa vitae at posuere lorem fringilla. Sit dolor,
              quis nullam porttitor duis hendrerit.{" "}
            </p>
            <div className={styles.portrait}>
              <Image
                src="/testimonial1.svg"
                alt="Personne Témoignage"
                width={80}
                height={80}
              />
            </div>

            <p className={styles.bold}>Directeur des ventes</p>
          </div>
          <div className={styles.item}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              mauris diam massa vitae at posuere lorem fringilla. Sit dolor,
              quis nullam porttitor duis hendrerit.{" "}
            </p>
            <div className={styles.portrait}>
              <Image
                src="/testimonial1.svg"
                alt="Personne Témoignage"
                width={80}
                height={80}
              />
            </div>
            <p className={styles.bold}>Directeur des ventes</p>
          </div>
          <div className={styles.item}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              mauris diam massa vitae at posuere lorem fringilla. Sit dolor,
              quis nullam porttitor duis hendrerit.{" "}
            </p>
            <div className={styles.portrait}>
              <Image
                src="/testimonial1.svg"
                alt="Personne Témoignage"
                width={80}
                height={80}
              />
            </div>
            <p className={styles.bold}>Directeur des ventes</p>
          </div>
          <div className={styles.item}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              mauris diam massa vitae at posuere lorem fringilla. Sit dolor,
              quis nullam porttitor duis hendrerit.{" "}
            </p>
            <div className={styles.portrait}>
              <Image
                src="/testimonial1.svg"
                alt="Personne Témoignage"
                width={80}
                height={80}
              />
            </div>
            <p className={styles.bold}>Directeur des ventes</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
