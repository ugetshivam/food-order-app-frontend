import React,{createContext, useState} from 'react'

export const CartContext = createContext(
    {
    cart: [],
    cartLength: 0,
    addItemHandler:(item)=>{},
    }
);

export const CartContextProvider = (props)=>{
    const [cart, setCart] = useState([]);
    console.log(cart.length);
    const addItemHandler = (item)=>{
        setCart((prevState)=>{
            const isItemAvailable = prevState.some((cartItem)=>cartItem.id === item.id);

            if(isItemAvailable){
                return prevState.map((cartItem)=>cartItem.id === item.id ? {...cartItem, qty: parseInt(cartItem.qty) + parseInt(item.qty)}:cartItem);
             }
             return [...prevState, item];
        });

     
    }

    const context = {
        cart: cart,
        cartLength: cart.length,
        addItemHandler: addItemHandler
    }

    return(
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}