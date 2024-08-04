import Modal from "react-modal";
import { API_URL } from "../../const";
import s from "./ProductModal.module.css";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

const customStyles = {
  content: {
    padding: "0",
    borderRadius: "6px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!data) return null;

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(data, quantity);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} contentLabel="Product Modal">
      <div className={s.wrapper}>
        <div className={s.image}>
          <img src={`${API_URL}${data.img}`} alt={data.title} />
        </div>
        <div className={s.body}>
          <div className={s.header}>
            <h2 className={s.title}>{data.title}</h2>
            <p className={s.price}>{data.price.toLocaleString()}&nbsp;₽</p>
          </div>

          <ul className={s.additional}>
            {Object.entries(data.additional).map(([key, value]) => (
              <li className={s.item} key={key}>
                <span>{key}</span> <span>{value}</span>
              </li>
            ))}
          </ul>

          <div className={s.footer}>
            <div className={s.quantity}>
              <button className={s.quantityButton} onClick={handleDecrease}>
                -
              </button>
              <input className={s.quantityInput} type="number" value={quantity} readOnly />
              <button className={s.quantityButton} onClick={handleIncrease}>
                +
              </button>
            </div>
            <button className={s.addBtn} onClick={handleAddToCart}>
              Добавить
            </button>
          </div>
        </div>

        <button className={s.close} onClick={onRequestClose}>
          &times;
        </button>
      </div>
    </Modal>
  );
};
