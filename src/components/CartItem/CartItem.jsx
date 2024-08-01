import classNames from "classnames";
import s from "./CartItem.module.css";

export const CartItem = ({ data }) => {
  return (
    <li className={s.cartItem}>
      <img className={s.image} src={data.image} alt={data.title} />

      <div className={s.info}>
        <h3 className={s.title}>{data.title}</h3>

        <div className={s.quantity}>
          <button className={classNames(s.quantityButton, s.quantityButton_minus)}>-</button>

          <input className={s.quantityInput} type="number" defaultValue={1} min="1" max="99" />

          <button className={classNames(s.quantityButton, s.quantityButton_plus)}>+</button>
        </div>

        <p className={s.price}>{data.price.toLocaleString()}&nbsp;₽</p>
      </div>
    </li>
  );
};
