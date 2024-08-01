import classNames from "classnames";
import s from "./Order.module.css";
import { OrderForm } from "../OrderForm/OrderForm";

export const Order = () => {
  return (
    <section className={s.order}>
      <div className={classNames("container", s.container)}>
        <h2 className={classNames(s.title, "title")}>Доставка</h2>

        <OrderForm />
      </div>
    </section>
  );
};
