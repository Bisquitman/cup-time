import s from "./Cart.module.css";
import { CartItem } from "../CartItem/CartItem";
import classNames from "classnames";
import { useCart } from "../../context/CartContext";
import { SkeletonLoader } from "../SkeletonLoader/SkeletonLoader";

export const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart
    ? cart.reduce((acc, item) => {
        return item.quantity * item.price + acc;
      }, 0)
    : 0;
  const totalItems = cart
    ? cart.reduce((acc, item) => {
        return item.quantity + acc;
      }, 0)
    : 0;

  return (
    <section className={s.cart}>
      <div className={classNames("container", s.container)}>
        <h2 className={classNames(s.title, "title")}>Корзина ({totalItems})</h2>

        <ul className={s.items}>
          {cart?.length ? cart.map((item) => <CartItem key={item.id} data={item} />) : <SkeletonLoader />}
        </ul>

        <div className={s.summary}>
          <h3 className={s.summaryTitle}>Итого:</h3>

          <p className={s.total}>{totalPrice?.toLocaleString()}&nbsp;₽</p>

          <button className={s.orderButton}>Заказать</button>
        </div>
      </div>
    </section>
  );
};
