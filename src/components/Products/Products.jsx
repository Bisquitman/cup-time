import s from "./Products.module.css";
import { Product } from "../Product/Product";
import classNames from "classnames";
import { useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import { useSearchParams } from "react-router-dom";
import { SkeletonLoader } from "../SkeletonLoader/SkeletonLoader";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory, categoriesRus, productsRef } = useProducts();

  const category = searchParams.get("category");

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  const categoryTitle = categoriesRus[category] || "Товары";

  return (
    <section className={s.products} ref={productsRef}>
      <div className="container">
        <h2 className={classNames(s.title, "title")}>{categoryTitle}</h2>

        <ul className={s.list}>
          {products.length ? products.map((item) => <Product key={item.id} data={item} />) : <SkeletonLoader />}
        </ul>
      </div>
    </section>
  );
};
