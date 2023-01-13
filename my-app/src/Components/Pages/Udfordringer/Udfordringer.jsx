import styles from "./Udfordringer.module.scss";
import Sustainability from "../../../Assets/Images/Image-Sustainability.jpg";
import Leave from "../../../Assets/Images/Image-Leave-No-One.jpg";
import Hunger from "../../../Assets/Images/Image-Hunger.jpg";

const Udfordringer = () => {
  return (
    <section className={styles.cardSection}>
      <header className={styles.sectionHeader}>
        <h3>UDFORDRINGER</h3>
        <p>
          Der er en lang række faktorer der har indvirkning på opfyldelsen af de
          mål, man gennem aftaler har forpligtiget sig til.
        </p>
      </header>
      <figure className={styles.cardFigure}>
        <figcaption>
          <article>
            <header className={styles.cardFigure}>
              <h4>Vækst vs. bæredygtighed.</h4>
            </header>
            <p>
              En overordnet udfordring er, at der mangler et mere nuanceret syn
              på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem
              økonomisk vækst og påvirkninger af miljø og samfund.
            </p>
            <p>
              Opretholdes den nuværende globale, materielle vækst, øges presset
              på jordens ressourcer.
            </p>
            <p>
              De livsunderstøttende økosystemer bliver i stigende grad
              overbelastet, og uligheden i verden vil blive større.
            </p>
          </article>
        </figcaption>
        <img src={Sustainability} alt="" />
      </figure>

      <figure className={styles.cardFigure}>
        <figcaption>
          <article>
            <header className={styles.cardHeader}>
              <h4>Leave no-one behind.</h4>
            </header>
            <p>
              I 2030-dagsordenen er inkluderet princippet om ”leave no one
              behind”. Princippet tilsiger, at alle lande skal opnå alle
              verdensmål, uden at nogen lades i stikken.
            </p>
            <p>
              Arbejdet med verdensmålene skal begynde med, at de fattigste og
              mest marginaliserede adresseres først.
            </p>
            <p>
              Dette er et vigtigt princip, hvortil også efterlevelsen af og
              respekten for menneskerettigheder er altafgørende.
            </p>
            <p>Med andre ord: “Leave No-One behind”.</p>
          </article>
        </figcaption>
        <img src={Leave} alt="" />
      </figure>

      <figure className={styles.cardFigure}>
        <figcaption>
          <article>
            <header className={styles.cardHeader}>
              <h4>Fattigdom og sult.</h4>
            </header>
            <p>
              Det første af FNs verdensmål handler om at afskaffe verdens
              fattigdom inden 2030.
            </p>
            <p>
              Det handler især om at give muligheder for mennesker i verdens
              fattigste lande. Verdensbanken definerer ”ekstrem fattigdom” som
              en personlig indkomst på under 1,9 dollars om dagen dvs. cirka 13
              kroner.
            </p>
            <p>En stor udfordring, men vi er allerede godt på vej.</p>
          </article>
        </figcaption>
        <img src={Hunger} alt="" />
      </figure>
    </section>
  );
};

export { Udfordringer };
