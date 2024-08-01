import s from "./Cart.module.css";
import { products } from "../../products";
import { CartItem } from "../CartItem/CartItem";
import classNames from "classnames";

export const Cart = () => {
  return (
    <section className={s.cart}>
      <div className={classNames("container", s.container)}>
        <h2 className={classNames(s.title, "title")}>Корзина (6)</h2>

        <ul className={s.items}>
          {products.map((product) => (
            <CartItem key={product.id} data={product} />
          ))}
        </ul>

        <div className={s.summary}>
          <h3 className={s.summaryTitle}>Итого:</h3>

          <p className={s.total}>{(2200).toLocaleString()}&nbsp;₽</p>

          <button className={s.orderButton}>Заказать</button>
        </div>
      </div>
    </section>
  );
};
