import styles from "../styles/Skills.module.css";
import Image from "next/image";

export const Skills = () => {
  return (
    <section className={styles.skillsContainer} id="skills">
      <h3 className={styles.titleSection}>Compétences</h3>
      <div className={styles.skills}>
        <div className={styles.skillsElements}>
          <div className={styles.icon}>
            <Image
              src="/dev.svg"
              alt="Icon Développement"
              width={100}
              height={100}
            />
          </div>
          <h4 className={styles.title}>Développement</h4>
          <ul className={styles.liste}>
            <li>React</li>
            <li>Nextjs</li>
            <li>CSS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Git</li>
          </ul>
        </div>
        <div className={styles.skillsElements}>
          <div className={styles.icon}>
            <Image
              src="/design.svg"
              alt="Icon Design"
              width={100}
              height={100}
            />
          </div>
          <h4 className={styles.title}>Design</h4>
          <ul className={styles.liste}>
            <li>Figma</li>
            <li>Affinity Designer</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
            <li>Maquettes</li>
            <li>Logos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
