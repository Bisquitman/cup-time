import s from "./Products.module.css";
import { Product } from "../Product/Product";
import classNames from "classnames";
import { useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import { useSearchParams } from "react-router-dom";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory } = useProducts();
  const defaultCategory = searchParams.get("category");

  useEffect(() => {
    setCategory(defaultCategory);
  }, [defaultCategory, setCategory]);

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
