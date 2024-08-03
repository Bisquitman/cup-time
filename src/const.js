export const API_URL = "https://cup-time-api-a5kb.onrender.com";

// Адреса для запросов к серверу (ручки)
// /api/products - Получить все продукты
// /api/products/{category} - получить продукты по категории
// /api/products/list?ids=1,2,3 - получить список товаров по id (1,2,3 для примера)
// /api/orders - POST запрос для отправки заказа

export const categoriesRus = {
  tea: "Чай",
  coffee: "Кофе",
  teapots: "Чайники",
  cezves: "Турки",
  other: "Прочее",
};

/* Для меню
{Object.entries(data.additional).map(([key, value]) => (
  <li key={key}>
    <strong>{key}</strong>: {value}
  </li>
))}
*/