import React,{useState,createContext,useEffect} from 'react'
import axios from 'axios';

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addItemHandler:(item)=>{},
    incrementItem: (itemId) => { },
    decrementItem: (itemId) => { },
    removeItem: (itemID) => { },
    placeOrder:()=>{}
});


export const CartContextProvider = (props) => {

    const initialItem = JSON.parse(window.localStorage.getItem('cart') || "[]");

    const [cart, setCart] = useState(initialItem);
    

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    },[cart])
   
    const addItemHandler = (item) => {
        setCart((prevState) => {

            const isItemAvailable = prevState.some((cartItem) => cartItem.id === item.id);

            if (isItemAvailable) {
                return prevState.map((cartItem) => cartItem.id === item.id ? { ...cartItem, qty: parseInt(cartItem.qty) + parseInt(item.qty)  } : cartItem);
            }

            return [...prevState, item];
        })
    }

    const incrementQtyHandler = (itemId) => {
        setCart((prevState)=>{
            return prevState.map((cartItem) => cartItem.id === itemId ? { ...cartItem, qty: parseInt(cartItem.qty) + 1 } : cartItem);
        })
    }

    const decrementQtyHandler = (itemId) => {
        setCart((prevState)=>{
            return prevState.map((cartItem) => (cartItem.id === itemId && cartItem.qty > 1) ? { ...cartItem, qty: parseInt(cartItem.qty) - 1 } : cartItem);
        })
    }

    const removeItemHandler = (itemId) =>{
        setCart((prevState)=>{
            return prevState.filter((cartItem)=> cartItem.id !== itemId);
        })
    }

    const placeOrderHandler = async() => {
            // local url = http://localhost:8000/register
        // Heroku url = https://food-app-server-mern.herokuapp.com/register
        await axios.post('http://localhost:8000/placeorder', { cart })
        setCart(() => {
            return [];
        });
    }

    const context = {
        cart: cart,
        cartLength: cart.length,
        addItemHandler: addItemHandler,
        incrementItem: incrementQtyHandler,
        decrementItem: decrementQtyHandler,
        removeItem: removeItemHandler,
        placeOrder:placeOrderHandler
    }

    
    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;