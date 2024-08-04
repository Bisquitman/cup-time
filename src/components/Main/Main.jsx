import { Navigate, Route, Routes } from "react-router-dom";
import { Products } from "../Products/Products.jsx";
import { Promo } from "../Promo/Promo.jsx";
import { Cart } from "../Cart/Cart.jsx";
import { Order } from "../Order/Order.jsx";
import { useCart } from "../../context/CartContext";

export const Main = () => {
  const { cart } = useCart();

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Navigate to="/products?category=tea" />} />

        <Route
          path="/products"
          element={
            <>
              <Promo />
              <Products />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Cart />
              {cart?.length ? <Order /> : null}
            </>
          }
        />
      </Routes>
    </main>
  );
};
