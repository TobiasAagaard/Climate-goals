import styles from "./Kontakt.module.scss";
import UnLogo from "../../../Assets/Images/UN-Logo-Large.png";

const Kontakt = () => {
  return (
    <section className={styles.contact}>
      <header class="section-header">
        <h3>KONTAKT OS</h3>
        <p>
          Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen
          herunder:
        </p>
      </header>

      <div className={styles.formGrid}>
        <img src={UnLogo} alt="" />

        <form action="#">
          <fieldset>
            <label htmlFor="fullname"></label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Indtast dit fulde navn"
            />

            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Indtast en gyldig email"
            />

            <label htmlFor="comment"></label>
            <textarea name="comment" id="comment"></textarea>

            <button type="reset" id="btn-light">
              Fortryd
            </button>
            <button type="button">Send</button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export { Kontakt };
