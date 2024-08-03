import { Link } from "react-router-dom";
import s from "./Promo.module.css";

export const Promo = () => {
  return (
    <section className={s.promo}>
      <div className="container">
        <div className={s.container}>
          <h1 className={s.title}>Попробуй новый вкус Арабики</h1>

          <Link className={s.link} to="/products?category=coffee">
            Перейти к кофе
          </Link>
        </div>
      </div>
    </section>
  );
};
