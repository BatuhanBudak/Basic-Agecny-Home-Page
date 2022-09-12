import React from "react";

export default function NavMobile({ toggleDrawer, drawerOpen }) {
  return (
    <div className="nav__first">
      <a className="nav__first__icon" href=""></a>
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={drawerOpen}
        aria-controls="mobile-nav-primary"
        aria-haspopup="menu"
        onClick={() => {
          toggleDrawer();
        }}
      >
        Menu
      </button>
    </div>
  );
}
