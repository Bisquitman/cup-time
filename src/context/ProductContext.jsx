import { createContext, useContext, useEffect, useRef, useState } from "react";
import { API_URL } from "../const";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const productsRef = useRef(null);

  const categoriesRus = {
    tea: "Чай",
    coffee: "Кофе",
    teapots: "Чайники",
    cezves: "Турки",
    other: "Прочее",
  };

  useEffect(() => {
    if (category) {
      fetch(`${API_URL}/api/products/${category}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [category]);

  return <ProductContext.Provider value={{ products, setCategory, categoriesRus, productsRef }}>{children}</ProductContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => useContext(ProductContext);
