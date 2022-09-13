import { useEffect, useRef, useState } from "react";
import useToggle from "../../hooks/useToggle";
import NavDrawer from "./NavDrawer";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

export default function Header() {
  const [drawerOpen, toggleDrawer] = useToggle();
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef();

  useEffect(() => {
    const header = headerRef.current;

    function handleScroll() {
      let currentScroll = window.scrollY;

      if (currentScroll <= header.getBoundingClientRect().height) {
        document.body.classList.add("scroll-up");
      }
      //Scroll Down
      else if (currentScroll > lastScrollY) {
        document.body.classList.add("scroll-down");
        document.body.classList.remove("scroll-up");
      }
      //Scroll Up
      else if (currentScroll < lastScrollY) {
        document.body.classList.remove("scroll-down");
        document.body.classList.add("scroll-up");
      }
      setLastScrollY(currentScroll);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, headerRef]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("nav-open");
    } else if (!drawerOpen) {
      document.body.classList.remove("nav-open");
    }
  }, [drawerOpen]);

  return (
    <header ref={headerRef}>
      <a href="#content" className="visually-hidden skip-nav">
        Skip Navigation
      </a>
      <div className="nav__background"></div>
      <div className="noise"></div>
      <div className="container nav__container">
        <nav className={`nav ${drawerOpen ? "drawer-open" : ""}`}>
          <NavMobile toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
          <NavDesktop />
          <NavDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
          <button
            className="header__second__menu__toggle"
            role="button"
            aria-label="Open second menu"
          >
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 5">
                <circle cx="2.5" cy="2.5" r="2.5"></circle>
                <circle cx="10.5" cy="2.5" r="2.5"></circle>
                <circle cx="18.5" cy="2.5" r="2.5"></circle>
              </svg>
            </figure>
          </button>
        </nav>
      </div>
    </header>
  );
}
