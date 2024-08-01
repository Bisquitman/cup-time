import { products } from "../../products";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  return (
    <section className="cart">
      <div className="container cart__container">
        <h2 className="cart__title title">Корзина (6)</h2>

        <ul className="cart__items items-cart">
          {products.map((product) => (
            <CartItem key={product.id} data={product} />
          ))}
        </ul>

        <div className="cart__summary">
          <h3 className="cart__summary-title">Итого:</h3>

          <p className="cart__total">{(2200).toLocaleString()}&nbsp;₽</p>

          <button className="cart__order-button">Заказать</button>
        </div>
      </div>
    </section>
  );
};
