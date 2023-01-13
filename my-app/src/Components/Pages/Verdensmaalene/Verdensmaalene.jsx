import styles from "./Verdensmaalene.module.scss";

const Verdensmaalene = () => {
  return (
    <section className={styles.verdensmaalene}>
      <header className={styles.sectionHeader}>
        <h3>DE 17 VERDENSMÅL</h3>
        <p>
          På FN topmødet i New York i 2015 vedtog verdens stats- og
          regeringsledere en hidtil uset ambitiøs og samfundsforandrende
          udviklingsdagsorden, også kaldt 2030 dagsordene
        </p>
        <p>
          Frem til 2030 skal denne dagsorden sætte kurs mod en mere bæredygtig
          udvikling for både mennesker og planet
        </p>
      </header>
      <div className={styles.articGrid}>
        <article className={styles.artic}>
          <header className={styles.articHeader}>
            <h4>Verdensmålene forpligter.</h4>
          </header>
          <p>
            Medlemslandende forpligter sig til helt at afskaffe fattigdom og
            sult i verden, sikre god uddannelse og sundhed til alle, reducere
            ulighed, fremme ligestilling, anstændige jobs, bæredygtig vækst og
            forbrug.
          </p>
          <p>
            Den nye dagsorden anerkender således at social, økonomisk og
            miljømæssig udvikling, fred, sikkerhed og internationalt samarbejde
            er tæt forbundet, og at det kræver en integreret indsats at opnå
            holdbare udviklingsresultate
          </p>
        </article>
        <article className={styles.artic}>
          <header className={styles.articHeader}>
            <h4>Verdensmålene gælder alle.</h4>
          </header>
          <p>
            Målene gælder alle lande - både rige og fattige - dvs. de er
            universelle.
          </p>
          <p>
            Udfordringer som social, økonomisk marginalisering, stigende
            ulighed, fødevareusikkerhed, ulig adgang til grundlæggende
            naturressourcer,og har regionale og globale konsekvenser.
          </p>
          <p>
            Det er derfor afgørende at alle lande leverer og løfter opgaven i
            fællesskab.
          </p>
        </article>
      </div>
    </section>
  );
};

export { Verdensmaalene };
