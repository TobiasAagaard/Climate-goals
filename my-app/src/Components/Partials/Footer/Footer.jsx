import styles from "./Footer.module.scss";
import Undp from "../../../Assets/Images/Partner-UNDP-Full.png";

const Footer = () => {
  return (
    <footer className={styles.footerMain}>
      <section className={styles.footerSection}>
        <article>
          <h2>Eksterne Links:</h2>
          <a href="https://www.verdensmaalene.dk/">
            https://www.verdensmaalene.dk/
          </a>
          <a href="https://www.globalgoals.org/">
            https://www.globalgoals.org//
          </a>
          <a href="https://www.un.org/sustainabledevelopment/">
            https://www.un.org/sustainabledevelopment/
          </a>
          <a href="https://worldslargestlesson.globalgoals.org/">
            https://worldslargestlesson.globalgoals.org/
          </a>
          <a href="https://www.unenvironment.org/">
            https://www.unenvironment.org/
          </a>
          <a href="https://ve.dk/klimaberegner/">
            https://ve.dk/klimaberegner/
          </a>
        </article>
        <article>
          <h2>Ressourcer</h2>
          <p>Bliver Verden Bedre (.pdf)</p>
          <p>Spotlight Rapport (.pdf)</p>
        </article>
        <img src={Undp} alt="Partner-UNDP" />
      </section>
    </footer>
  );
};

export { Footer };
