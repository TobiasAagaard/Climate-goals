import styles from "./Delmaalene.module.scss";
const Delmaalene = () => {
  return (
    <section className={styles.gallery}>
      <header className={styles.sectionHeader}>
        <h3>DELMÅLENE</h3>
        <p>
          FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete
          mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert
          delmål har FN formuleret en række indikatorer for de enkelte delmål.
        </p>
        <p className={styles.highlight}>Se eksempler på enkelte delmål her:</p>
      </header>
      <figure class={styles.galleryGrid}>
        <img
          src={require("../../../Assets/Images/Goals/Global-Goals.png")}
          alt="Global-Goals"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Clean-Energy.png")}
          alt="Goal-Clean-Energy"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Clean-Water.png")}
          alt="Goal-Water"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Climate-Action.png")}
          alt="Goal-Action"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Decent-Work.png")}
          alt="Goal-Decent-Work"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Gender-Equality.png")}
          alt="Goal-Gender-Equality"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Good-Education.png")}
          alt="Goal-Good-Education"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Good-Health.png")}
          alt="Goal-Good-helth"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Industry.png")}
          alt="Goal-Industry"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Inequalities.png")}
          alt="Goal-Inequalities"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Institutions.png")}
          alt="Goal-Institutions"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Life-Land.png")}
          alt="Goal-Life-Land"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-No-Hunger.png")}
          alt="Goal-No-Hunger"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Life-Water.png")}
          alt="Goal-Life-Water"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-No-Poverty.png")}
          alt="Goal-No-Poverty"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Partnership.png")}
          alt="Goal-Partnership"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Responsible-Consumption.png")}
          alt="Goal-Responsible-Consumption"
        />
        <img
          src={require("../../../Assets/Images/Goals/Goal-Sustainable-Cities.png")}
          alt="Goal-Sustainable-Cities"
        />
      </figure>
    </section>
  );
};

export { Delmaalene };
