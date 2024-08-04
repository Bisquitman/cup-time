import classNames from "classnames";
import s from "./Order.module.css";
import { useOrder } from "../../context/OrderContext";
// import { OrderForm } from "../OrderForm/OrderForm";

export const Order = () => {
  const {orderDetails, updateOrderDetails} = useOrder();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateOrderDetails(name, value);
  };

  return (
    <section className={s.order}>
      <div className={classNames("container", s.container)}>
        <h2 className={classNames(s.title, "title")}>Доставка</h2>

        {/* <OrderForm /> */}
        <form className={s.orderForm}>
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Имя"
            value={orderDetails.name}
            onChange={handleChange}
          />
          <input
            className={s.input}
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={orderDetails.phone}
            onChange={handleChange}
          />
          <input
            className={classNames(s.input, s.input_address)}
            type="text"
            name="address"
            placeholder="Адрес"
            value={orderDetails.address}
            onChange={handleChange}
          />

          <fieldset className={s.payment}>
            <legend className={s.paymentTitle}>Оплата:</legend>

            <label className={s.paymentLabel}>
              <input
                className={s.radio}
                type="radio"
                name="payment"
                value="card"
                checked={orderDetails.payment === "card"}
                onChange={handleChange}
              />
              Картой
            </label>

            <label className={s.paymentLabel}>
              <input
                className={s.radio}
                type="radio"
                name="payment"
                value="cash"
                checked={orderDetails.payment === "cash"}
                onChange={handleChange}
              />
              Наличные
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
