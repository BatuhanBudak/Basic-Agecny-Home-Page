export default function NavDesktop() {
  return (
    <div className="nav__menu">
      <ul className="nav__menu__list">
        <li className="nav__menu__list__item">
          <a href="" className="nav__menu__list__item__link">
            MENU
          </a>
        </li>

        <li className="nav__menu__list__item  active-link">
          <a href="" className="nav__menu__list__item__link ">
            REWARDS
          </a>
        </li>
        <li className="nav__menu__list__item">
          <a href="" className="nav__menu__list__item__link">
            GIFT CARDS
          </a>
        </li>
      </ul>
      <div className="nav__menu__auth">
        <a className="nav__menu__auth__link" href="">
          Find a store
        </a>
        <div className="nav__menu__auth__button-container">
          <a className="nav__menu__auth__link button" href="">
            Sign in
          </a>
          <a className="nav__menu__auth__link button button--white" href="">
            Join now
          </a>
        </div>
      </div>
    </div>
  );
}
