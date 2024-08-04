import { Link } from "react-router-dom";
import { Social } from "../Social/Social";
import s from "./Footer.module.css";
import classNames from "classnames";
import { useProducts } from "../../context/ProductContext";
import { getActiveClass } from "../../helpers";

export const Footer = () => {
  const { categoriesRus, productsRef } = useProducts();
  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={s.footer}>
      <div className={classNames("container", s.container)}>
        <Link to="/">
          <img className={s.logo} src="/img/logo.svg" alt="Logo cup time" />
        </Link>

        <div>
          <ul className={s.menu}>
            {Object.entries(categoriesRus).map(([key, value]) => (
              <li key={key}>
                <Link
                  className={classNames(s.menuLink, getActiveClass(key) ? s.active : "")}
                  to={`/products?category=${key}`}
                  onClick={scrollToProducts}>
                  {value}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.info}>
          <p className={s.copyright}>© CupTime, 2024</p>

          <p hidden>Проект сделан в учебных целях</p>

          <ul>
            <li className={s.developer}>
              Designer:{" "}
              <a className={s.developerLink} href="https://t.me/Mrshmallowww" target="_blank" rel="noreferrer noopener">
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
