import styles from "./Header.module.scss";
import Logo from "../../../Assets/Images/ColorWheel.png";
const Header = () => {
  return (
    <header className={styles.headerMain}>
      <img src={Logo} alt="Logo colerWheel" />
      <hgroup>
        <h1>THE GLOBAL GOALS</h1>
        <h2>For sustainable Developement</h2>
      </hgroup>
    </header>
  );
};

export { Header };
