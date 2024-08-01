import s from "./Products.module.css";
import { products } from "../../products";
import { Product } from "../Product/Product";
import classNames from "classnames";

export const Products = () => {
  return (
    <section className={s.products}>
      <div className="container">
        <h2 className={classNames(s.title, "title")}>Чай</h2>

        <ul className={s.list}>
          {products.map((item) => (
            <Product key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
