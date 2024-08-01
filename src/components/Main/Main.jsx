import { Route, Routes } from "react-router-dom";
import { Products } from "../Products/Products.jsx";
import { Promo } from "../Promo/Promo.jsx";
import { Cart } from "../Cart/Cart.jsx";
import { Order } from "../Order/Order.jsx";

export const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
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
              <Order />
            </>
          }
        />
      </Routes>
    </main>
  );
};
