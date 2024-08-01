import classNames from "classnames";
import s from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={classNames(s.container, "container")}>
        <Link to="/" className={s.logoLink}>
          <img src="/img/logo.svg" alt="Logo cup time" />
        </Link>

        <nav>
          <ul className={s.menu}>
            <li>
              <a className={classNames(s.menuLink, s.active)} href="#">
                Чай
              </a>
            </li>

            <li>
              <a className={s.menuLink} href="#">
                Кофе
              </a>
            </li>

            <li>
              <a className={s.menuLink} href="#">
                Чайники
              </a>
            </li>

            <li>
              <a className={s.menuLink} href="#">
                Турки
              </a>
            </li>

            <li>
              <a className={s.menuLink} href="#">
                Прочее
              </a>
            </li>
          </ul>
        </nav>

        <Link className={s.cartLink} to="cart">
          4
        </Link>
      </div>
    </header>
  );
};
