import s from "./Promo.module.css";

export const Promo = () => {
  return (
    <section className={s.promo}>
      <div className="container">
        <div className={s.container}>
          <h1 className={s.title}>Попробуй новый вкус Арабики</h1>

          <a className={s.link} href="#">
            Перейти к кофе
          </a>
        </div>
      </div>
    </section>
  );
};
