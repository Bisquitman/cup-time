import { useState } from "react";
import { API_URL } from "../../const";
import s from "./Product.module.css";
import { ProductModal } from "../ProductModal/ProductModal";

export const Product = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <li>
      <a
        className={s.link}
        href="#"
        title={data.title}
        onClick={openModal}
        aria-label={`Открыть модальное окно для ${data.title}`}>
        <article className={s.product}>
          <img className={s.image} src={`${API_URL}${data.img}`} alt={data.title} />
          <div className={s.content}>
            <h3 className={s.title}>{data.title}</h3>
            <p className={s.price}>{(data.price).toLocaleString()}&nbsp;₽</p>
          </div>
        </article>
      </a>

      <ProductModal isOpen={modalIsOpen} onRequestClose={closeModal} data={data} />
    </li>
  );
};
