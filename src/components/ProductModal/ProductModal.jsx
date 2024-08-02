import Modal from "react-modal";
import { API_URL } from "../../const";
import s from "./ProductModal.module.css";

const customStyles = {
  content: {
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
  if (!data) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} contentLabel="Product Modal">
      <h2 className={s.title}>{data.title}</h2>
      <img src={`${API_URL}${data.img}`} alt={data.title} />
      <p>{data.price.toLocaleString()}&nbsp;₽</p>

      <ul>
        {Object.entries(data.additional).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>

      <button onClick={onRequestClose}>Закрыть</button>
    </Modal>
  );
};
