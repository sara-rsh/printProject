import { createContext, useState , } from "react";
import { useProducts } from '../context/apiContext';

export const CartContext = createContext({
    items: [],
    getProductQuantity: () =>{},
    addItemToCart: () =>{},
    removeItemToCart: () =>{},
    deleteFromCart: () =>{},
    getTotalAmount: () =>{}
})

export function CartProvider({ children }){

    const products = useProducts();

    const[cartProducts , setCartProducts] = useState([])
    function getProductQuantity(id){
        const quantity = cartProducts.find((item) => item.id === id)?.quantity
        if(quantity === undefined){return 0}
        return quantity
    }
    function addItemToCart(id){
        const quantity = getProductQuantity(id)
        if (quantity === 0){
            setCartProducts([...cartProducts, { id:id , quantity:1}])
        }else {
            setCartProducts(
                cartProducts.map((item) => item.id === id ? {...item , quantity: item.quantity+1} : item)
            )
        }
    }
    function deleteFromCart(id){
        setCartProducts((cartProducts) =>
            cartProducts.filter((item) => {return item.id !== id})
    )
    }
    function removeItemToCart(id){
        const quantity = getProductQuantity(id)
        if (quantity === 1){
            deleteFromCart(id)
        } else{
            setCartProducts(
                cartProducts.map((item) => item.id === id ? {...item, quantity: item.quantity-1} : item)
            )
        }
    }

function getTotalAmount(){
    let totalAmount = 0
    cartProducts.map((item) => {
        const productData = products.id
        totalAmount += productData.price * item.quantity
        return totalAmount
    })
}

    const ContextVAlue = {
        items:cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemToCart,
        deleteFromCart,
        getTotalAmount
    }
    return(
        <CartContext.Provider value={ContextVAlue}>{children}</CartContext.Provider>
    )
}