import { Link, useSearchParams } from "react-router-dom";
import s from "./Promo.module.css";

export const Promo = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <section className={s.promo}>
      <div className="container">
        <div className={s.container}>
          <h1 className={s.title}>Попробуй новый вкус Арабики</h1>

          {category !== "coffee" ? (
            <Link className={s.link} to="/products?category=coffee">
              Перейти к кофе
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};
