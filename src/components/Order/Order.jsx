export const Order = () => {
  return (
    <section className="order">
      <div className="container order__container">
        <h2 className="order__title title">Доставка</h2>

        <form className="order__form order-form">
          <input className="order-form__input" type="text" name="name" placeholder="Имя" />
          <input className="order-form__input" type="tel" name="phone" placeholder="Телефон" />
          <input className="order-form__input order-form__input_address" type="text" name="address" placeholder="Адрес" />

          <fieldset className="order-form__payment">
            <legend className="order-form__payment-title">Оплата:</legend>

            <label className="order-form__payment-label">
              <input className="order-form__radio" type="radio" name="payment" value="card" />
              Картой
            </label>

            <label className="order-form__payment-label">
              <input className="order-form__radio" type="radio" name="payment" value="cash" defaultChecked />
              Наличные
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
