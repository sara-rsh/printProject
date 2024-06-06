import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductsContext2 = createContext();

export const useProducts2 = () => {
  return useContext(ProductsContext2);
};

export const ProductsProvider2 = ({ children }) => {
  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(response => response.json())
      .then(data => setProducts2(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ProductsContext2.Provider value={products2}>
      {children}
    </ProductsContext2.Provider>
  );
};