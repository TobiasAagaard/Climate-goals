import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const NavArr = [
  { title: "verdensmålene", path: "/" },
  { title: "delmålene", path: "/delmaalene" },
  { title: "udfordringer", path: "/udfordringer" },
  { title: "kontakt", path: "/kontakt" },
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
