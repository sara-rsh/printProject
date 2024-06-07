import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductsContext2 = createContext();

export const useProducts2 = () => {
  return useContext(ProductsContext2);
};

export const ProductsProvider2 = ({ children }) => {
  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/products")
    // fetch("https://api.escuelajs.co/api/v1/products")
    //   .then(response => response.json())
    //   .then(data => setProducts2(data))
    //   .catch(error => console.error(error));

    // const fetchData = async () => {
    //   const result = await fetch("http://localhost:5000/products");
    //   const jsonResult = await result.json();
    //   setProducts2(jsonResult);
    // };
    // fetchData();

    const fetchData = () => {
      axios
        .get("http://localhost:5000/products")
        .then((response) => {
          setProducts2(response.data)
        })
        .catch((error) => {
          console.log(error)
        });
    };
    fetchData();
  }, []);

  return (
    <ProductsContext2.Provider value={products2}>
      {children}
    </ProductsContext2.Provider>
  );
};
