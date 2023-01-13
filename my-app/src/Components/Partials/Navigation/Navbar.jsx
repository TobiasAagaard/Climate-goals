import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const NavArr = [
  { title: "verdensmålene", path: "/" },
  { title: "delmålene", path: "/Delmaalene" },
  { title: "udfordringer", path: "/Udfordringer" },
  { title: "kontakt", path: "/Kontakt" },
];

const Navbar = (props) => {
  return (
    <nav className={styles.navMain}>
      <ul>
        {props.data.map((NavArr, key) => {
          return (
            <li key={key}>
              <NavLink to={NavArr.path}>{NavArr.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Navbar, NavArr };
