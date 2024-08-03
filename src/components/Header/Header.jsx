import classNames from "classnames";
import s from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Header = () => {
  const location = useLocation();

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get("category");

    return currentCategory === category;
  };

  const { cart } = useCart();

  const totalItems = cart
    ? cart.reduce((acc, item) => {
        return item.quantity + acc;
      }, 0)
    : 0;

  return (
    <header className={s.header}>
      <div className={classNames(s.container, "container")}>
        <Link to="/" className={s.logoLink}>
          <img src="/img/logo.svg" alt="Logo cup time" />
        </Link>

        <nav>
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
        </nav>

        <Link className={s.cartLink} to="cart">
          {totalItems}
        </Link>
      </div>
    </header>
  );
};
