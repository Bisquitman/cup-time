import classNames from "classnames";
import s from "./CartItem.module.css";
import { API_URL } from "../../const";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export const CartItem = ({ data }) => {
  const [itemQuantity, setItemQuantity] = useState(data.quantity);
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    const newQuantity = itemQuantity - 1;

    if (newQuantity > 0) {
      setItemQuantity(newQuantity);
      updateQuantity(data.id, newQuantity);
    } else {
      // updateQuantity(data.id, 0);
      removeFromCart(data.id);
    }
  };

  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    updateQuantity(data.id, newQuantity);
  };

  return (
    <li className={s.cartItem}>
      <img className={s.image} src={`${API_URL}${data.img}`} alt={data.title} />

      <div className={s.info}>
        <h3 className={s.title}>{data.title}</h3>

        <div className={s.quantity}>
          <button className={classNames(s.quantityButton, s.quantityButton_minus)} onClick={handleDecrease}>
            -
          </button>

          <input
            className={s.quantityInput}
            type="number"
            value={data.quantity}
            min="1"
            max="99"
            readOnly
          />

          <button className={classNames(s.quantityButton, s.quantityButton_plus)} onClick={handleIncrease}>
            +
          </button>
        </div>

        <p className={s.price}>{(data.price * data.quantity).toLocaleString()}&nbsp;₽</p>
      </div>
    </li>
  );
};
