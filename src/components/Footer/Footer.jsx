import { Link } from "react-router-dom";
import { Social } from "../Social/Social";
import s from "./Footer.module.css";
import classNames from "classnames";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={classNames("container", s.container)}>
        <Link to="/">
          <img className={s.logo} src="/img/logo.svg" alt="Logo cup time" />
        </Link>

        <div>
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
        </div>

        <div className={s.info}>
          <p className={s.copyright}>© CupTime, 2024</p>

          <p hidden>
            Проект сделан в учебных целях
          </p>

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
