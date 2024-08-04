import classNames from "classnames";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useProducts } from "../../context/ProductContext";
import { getActiveClass } from "../../helpers";
import { useEffect, useState } from "react";

export const Header = () => {
  const { cart } = useCart();
  const { categoriesRus } = useProducts();

  const totalItems = cart
    ? cart.reduce((acc, item) => {
        return item.quantity + acc;
      }, 0)
    : 0;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <header className={s.header}>
      <div className={classNames(s.container, "container")}>
        <Link to="/" className={s.logoLink}>
          <img src="/img/logo.svg" alt="Logo cup time" />
        </Link>

        <nav className={classNames(s.headerNav, isMenuOpen ? s.active : "")}>
          <ul className={s.menu}>
            {Object.entries(categoriesRus).map(([key, value]) => (
              <li key={key}>
                <Link
                  className={classNames(s.menuLink, getActiveClass(key) ? s.active : "")}
                  to={`/products?category=${key}`}
                  onClick={closeMenu}>
                  {value}
                </Link>
              </li>
            ))}
          </ul>

          <button className={s.closeBtn} onClick={closeMenu}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="7.28174" y="7.07532" width="20" height="1" transform="rotate(45 7.28174 7.07532)" fill="#D9D9D9" />
              <rect x="6.5752" y="21.2173" width="20" height="1" transform="rotate(-45 6.5752 21.2173)" fill="#D9D9D9" />
            </svg>
          </button>
        </nav>

        <div className={s.control}>
          <Link className={s.cartLink} to="cart">
            {totalItems}
          </Link>

          <button className={s.headerBurger} aria-label="Открыть меню" onClick={openMenu}>
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="9.5" width="20" height="2" fill="#D9D9D9" />
              <rect x="4" y="14.5" width="20" height="2" fill="#D9D9D9" />
              <rect x="4" y="19.5" width="20" height="2" fill="#D9D9D9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
