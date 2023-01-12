import { NavLink } from "react-router-dom";

const NavDes = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Start</NavLink>
        </li>
        <li>
          <NavLink to="/MitCo2">Mit Co2</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { NavDes };
