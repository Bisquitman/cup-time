import { Link, useLocation } from "react-router-dom";
import { Social } from "../Social/Social";
import s from "./Footer.module.css";
import classNames from "classnames";

export const Footer = () => {
  const location = useLocation();

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get("category");

    return currentCategory === category;
  };

  return (
    <footer className={s.footer}>
      <div className={classNames("container", s.container)}>
        <Link to="/">
          <img className={s.logo} src="/img/logo.svg" alt="Logo cup time" />
        </Link>

        <div>
          <ul className={s.menu}>
            <li>
              <Link className={classNames(s.menuLink, getActiveClass("tea") ? s.active : "")} to="/products?category=tea">
                Чай
              </Link>
            </li>

            <li>
              <Link className={classNames(s.menuLink, getActiveClass("coffee") ? s.active : "")} to="/products?category=coffee">
                Кофе
              </Link>
            </li>

            <li>
              <Link
                className={classNames(s.menuLink, getActiveClass("teapots") ? s.active : "")}
                to="/products?category=teapots">
                Чайники
              </Link>
            </li>

            <li>
              <Link className={classNames(s.menuLink, getActiveClass("cezves") ? s.active : "")} to="/products?category=cezves">
                Турки
              </Link>
            </li>

            <li>
              <Link className={classNames(s.menuLink, getActiveClass("other") ? s.active : "")} to="/products?category=other">
                Прочее
              </Link>
            </li>
          </ul>
        </div>

        <div className={s.info}>
          <p className={s.copyright}>© CupTime, 2024</p>

          <p hidden>Проект сделан в учебных целях</p>

          <ul>
            <li className={s.developer}>
              Designer:{" "}
              <a className={s.developerLink} href="#" target="_blank" rel="noreferrer noopener">
                Anastasia Ilina
              </a>
            </li>
            <li className={s.developer}>
              Developer:{" "}
              <a className={s.developerLink} href="#" target="_blank" rel="noreferrer noopener">
                Bisquitman
              </a>
            </li>
          </ul>
        </div>

        <div>
          <a className={s.email} href="mailto:CUPTIME@gmail.com">
            CUPTIME@gmail.com
          </a>

          <Social />
        </div>
      </div>
    </footer>
  );
};
