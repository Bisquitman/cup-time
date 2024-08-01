import s from "./Product.module.css";

export const Product = ({ data }) => {
  return (
    <li>
      <a className={s.link} href="#" title={data.title}>
        <article className="product">
          <img className={s.image} src={data.image} alt={data.title} />
          <div className={s.content}>
            <h3 className={s.title}>{data.title}</h3>
            <p className={s.price}>{data.price}&nbsp;₽</p>
          </div>
        </article>
      </a>
    </li>
  );
};
