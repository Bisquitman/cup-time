export const Product = ({ data }) => {
  return (
    <li className="products__item">
      <a className="product__link" href="#" title={data.title}>
        <article className="products__card product">
          <img className="product__image" src={data.image} alt={data.title} />
          <div className="product__content">
            <h3 className="product__title">{data.title}</h3>
            <p className="product__price">{data.price}&nbsp;₽</p>
          </div>
        </article>
      </a>
    </li>
  );
};
