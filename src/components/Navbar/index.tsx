import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-8 justify-end pt-10 pr-24 font-medium text-sm">
          <li>
            <NavLink to="/about">About me</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/work">Our Work</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact me</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
