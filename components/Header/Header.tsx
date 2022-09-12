import { useEffect } from "react";
import useToggle from "../../hooks/useToggle";
import NavDrawer from "./NavDrawer";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

export default function Header() {
  const [drawerOpen, toggleDrawer] = useToggle();

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("nav-open");
    } else if (!drawerOpen) {
      document.body.classList.remove("nav-open");
    }
  }, [drawerOpen]);

  return (
    <header>
      <a href="#content" className="visually-hidden skip-nav">
        Skip Navigation
      </a>
      <div className="container nav__container">
        <nav className={`nav ${drawerOpen ? "drawer-open" : ""}`}>
          <NavMobile toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
          <NavDesktop />
          <NavDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        </nav>
      </div>
    </header>
  );
}
