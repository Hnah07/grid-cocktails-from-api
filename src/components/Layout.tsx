import { type ReactNode } from "react";
import { Link, NavLink } from "react-router";

type PropTypes = {
  children: ReactNode;
};
const Layout = ({ children }: PropTypes) => {
  return (
    <>
      <header>
        <Link to="/">
          <img src="/vite.svg" alt="" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                // className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                Random cocktail
              </NavLink>
            </li>
            <li>
              <NavLink
                //className={({ isActive }) => (isActive ? "active" : "")}
                to="/cocktails"
              >
                Cocktails
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>&copy; 2025 - Syntra Full Stack</footer>
    </>
  );
};
export default Layout;
