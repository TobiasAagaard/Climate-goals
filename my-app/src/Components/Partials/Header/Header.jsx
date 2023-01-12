import style from "./Header.module.scss";
import Logo from "../../../Assets/Images/KT-Logo.png";
import HeroBg from "../../../Assets/Images/Bg-Hero-Blue.png";

const Header = () => {
  return (
    <header className={style.headerMain}>
      <div className={style.HeorContainer}>
        <img src={HeroBg} alt="" />
      </div>
      <div className={style.LogoContainer}>
        <img src={Logo} alt="Klima-tossen-logo" />
        <article>
          <p>
            "Det er rigtigt, at vi hver især kun kan bidrage lidt til den
            samlede løsning."
          </p>
          <p>
            "Lige så rigtigt er det, at vi slet ikke kan nå målet, uden at hver
            især bidrager en smule til det."
          </p>
        </article>
      </div>
    </header>
  );
};

export { Header };
