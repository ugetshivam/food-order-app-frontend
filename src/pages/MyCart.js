import React, { useContext } from 'react'
import styles from './MyCart.module.css'
import { CartContext } from '../contexts/CartContext'
const MyCart = () => {
    const cartCtx = useContext(CartContext);
    const cart = cartCtx.cart;




    const payHandler = ()=>{
        // PAYMENT API
    }



    if(cart.length === 0){
        return(
            <h1 style={{margin: "100px auto",textAlign: 'center'}}>It looks like your cart is empty right now</h1>
        );
    }

    let totalBill = 0;
    if(cart.length === 1){
        totalBill = cart[0].price * cart[0].qty;
    }
    else if(cart.length > 1){
        totalBill = cart.reduce((prev, curr) => prev.price* parseInt(prev.qty) + curr.price* parseInt(curr.qty) );
    }
    return (
        <div>
        <div className={styles['cart']}>
            <h1>My Cart</h1>
            <ul>
                {
                    cart.map((item, idx)=>{
                        return <li key={idx}>
                            <p>Item Name: {item.name}</p>
                            <p>Description: {item.desc}</p>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.qty}</p>
                            <hr/>
                        </li>
                    })
                }
            </ul>
        </div>
        <div className={styles['bill']}>
        <h1>Amount to pay</h1>
        <span>&#8377;{totalBill}</span>
        <button onClick={payHandler}>Pay</button>
        </div>
        </div>
    )
}

export default MyCart
