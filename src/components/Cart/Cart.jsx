import s from "./Cart.module.css";
import { CartItem } from "../CartItem/CartItem";
import classNames from "classnames";
import { useCart } from "../../context/CartContext";
import { SkeletonLoader } from "../SkeletonLoader/SkeletonLoader";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useOrder } from "../../context/OrderContext";
import { API_URL } from "../../const";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Cart = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { cart, clearCart } = useCart();
  const { orderDetails, clearOrderDetails } = useOrder();

  const handleSubmit = async () => {
    const orderData = {
      ...orderDetails,
      items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
    };

    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Ошибка пр иотправке заказа");
      }

      const result = await response.json();

      setOrderStatus("success");
      setOrderId(result.order.id);
      clearCart();
      clearOrderDetails();
    } catch (error) {
      setOrderStatus(error);
      console.error("Ошибка: ", error);
    } finally {
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const totalPrice = cart
    ? cart.reduce((acc, item) => {
        return item.quantity * item.price + acc;
      }, 0)
    : 0;
  const totalItems = cart
    ? cart.reduce((acc, item) => {
        return item.quantity + acc;
      }, 0)
    : 0;

  return (
    <section className={s.cart}>
      <div className={classNames("container", s.container)}>
        <h2 className={classNames(s.title, "title")}>Корзина ({totalItems})</h2>

        {cart?.length === 0 ? (
          <>
            <p>
              Корзина пуста...
              <br />
              <br />
              Вернитесь на{" "}
              <Link to="/" style={{ color: "#64099b", fontWeight: "700" }}>
                главную страницу
              </Link>{" "}
              и добавьте товары в корзину.
            </p>
          </>
        ) : (
          <ul className={s.items}>
            {cart ? cart?.map((item) => <CartItem key={item.id} data={item} />) : <SkeletonLoader count={cart?.length} />}
          </ul>
        )}

        {cart?.length ? (
          <div className={s.summary}>
            <h3 className={s.summaryTitle}>Итого:</h3>

            <p className={s.total}>{totalPrice?.toLocaleString()}&nbsp;₽</p>

            <button className={s.orderButton} onClick={handleSubmit}>
              Заказать
            </button>
          </div>
        ) : null}
      </div>

      <Modal className={s.modalCart} overlayClassName={s.modalCartOverlay} onRequestClose={closeModal} isOpen={modalIsOpen}>
        <h2 className={s.modalCartTitle}>
          {orderStatus === "success"
            ? `Заказ успешно отправлен. Номер заказа: ${orderId}`
            : `Произошла ошибка при отправке заказа...`}

          <button className={s.modalCartCloseBtn} onClick={closeModal}>
            &times;
          </button>
        </h2>
      </Modal>
    </section>
  );
};
