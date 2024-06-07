import React, { createContext, useContext, useState, useEffect } from "react";

const ProductsContext2 = createContext();

export const useProducts2 = () => {
  return useContext(ProductsContext2);
};

export const ProductsProvider2 = ({ children }) => {
  const [products2, setProducts2] = useState([]);

  useEffect(() => {

    // const fetchData = async () => {
    //   const result = await fetch("http://localhost:5000/products");
    //   const jsonResult = await result.json();
    //   console.log(jsonResult)
    //   setProducts2(jsonResult);
    // };
    // fetchData();
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/products2");
        if (!result.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonResult = await result.json();
        setProducts2(jsonResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()

  }, []);

  return (
    <ProductsContext2.Provider value={products2}>
      {children}
    </ProductsContext2.Provider>
  );
};
