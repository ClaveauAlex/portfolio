import styles from "../styles/Experiences.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Experiences() {
  return (
    <section className={styles.experiencesContainer}>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              mauris diam massa vitae at posuere lorem fringilla. Sit dolor,
              quis nullam porttitor duis hendrerit.{" "}
            </p>
            <a to="#" className={styles.lien}>En savoir plus</a>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              mauris diam massa vitae at posuere lorem fringilla. Sit dolor,
              quis nullam porttitor duis hendrerit.{" "}
            </p>
            <a to="#" className={styles.lien}>En savoir plus</a>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              mauris diam massa vitae at posuere lorem fringilla. Sit dolor,
              quis nullam porttitor duis hendrerit.{" "}
            </p>
            <a to="#" className={styles.lien}>En savoir plus</a>
          </div>
        </div>
      </div>
    </section>
  );
}
