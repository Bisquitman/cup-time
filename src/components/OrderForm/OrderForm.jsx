import classNames from "classnames";
import s from "./OrderForm.module.css";

export const OrderForm = () => {
  return (
    <form className={s.orderForm}>
      <input className={s.input} type="text" name="name" placeholder="Имя" />
      <input className={s.input} type="tel" name="phone" placeholder="Телефон" />
      <input className={classNames(s.input, s.input_address)} type="text" name="address" placeholder="Адрес" />

      <fieldset className={s.payment}>
        <legend className={s.paymentTitle}>Оплата:</legend>

        <label className={s.paymentLabel}>
          <input className={s.radio} type="radio" name="payment" value="card" />
          Картой
        </label>

        <label className={s.paymentLabel}>
          <input className={s.radio} type="radio" name="payment" value="cash" defaultChecked />
          Наличные
        </label>
      </fieldset>
    </form>
  );
};
