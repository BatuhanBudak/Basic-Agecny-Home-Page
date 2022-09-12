import { MobileNavMenuIcon } from "../Icon";

export default function NavDrawer({ drawerOpen, toggleDrawer }) {
  return (
    <div
      className="nav__drawer"
      aria-hidden={!drawerOpen}
      tabIndex={drawerOpen ? 0 : -1}
      role="menu"
    >
      <div className="nav__drawer__menu">
        <a className="nav__drawer__menu__icon" href="">
          <MobileNavMenuIcon />
        </a>
        <button
          type="button"
          className="nav__drawer__menu__close"
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-primary"
          onClick={() => {
            toggleDrawer();
          }}
        >
          <figure className="nav__drawer__menu__close__figure">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 11.7">
              <path d="M0,10.6L10.6,0l1.1,1.1L1.1,11.7L0,10.6z"></path>
              <path d="M10.6,11.7L0,1.1L1.1,0l10.6,10.6L10.6,11.7z"></path>
            </svg>
          </figure>
          <span className="visually-hidden" aria-hidden={true}>
            Close Mobile Nav
          </span>
        </button>
      </div>
      <ul className="nav__drawer__list" id="mobile-nav-primary">
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            WORK
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            ABOUT
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            NEWS
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            THINKING
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            PLEDGE
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            CAREERS
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            CONTACT
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            INITIATIVES
          </a>
        </li>
      </ul>
    </div>
    // <div
    //   className={`

    //    nav__drawer-second ${secondDrawerOpen ? "second-drawer-open" : ""}`}
    //   role="menu"
    //   aria-hidden={!secondDrawerOpen}
    //   tabIndex={secondDrawerOpen ? 0 : -1}
    // >
    //   <button
    //     className="nav__drawer-second__list__item__btn  has-arrow has-arrow--left"
    //     aria-controls="mobile-nav-secondary"
    //     aria-expanded={secondDrawerOpen}
    //     aria-label="Close seconday navigation"
    //     onClick={() => {
    //       toggleSecondDrawer();
    //     }}
    //   >
    //     Menu
    //   </button>
    //   <ul
    //     className="nav__drawer__list nav__drawer__list--second"
    //     id="mobile-nav-secondary"
    //   >
    //     <li className="nav__drawer__list__item">
    //       <a className="nav__drawer__list__item__link" href="">
    //         All products
    //       </a>
    //     </li>
    //     <li className="nav__drawer__list__item">
    //       <a className="nav__drawer__list__item__link" href="">
    //         Featured
    //       </a>
    //     </li>
    //     <li className="nav__drawer__list__item">
    //       <a className="nav__drawer__list__item__link" href="">
    //         Previous
    //       </a>
    //     </li>
    //     <li className="nav__drawer__list__item">
    //       <a className="nav__drawer__list__item__link" href="">
    //         Favorites
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}
