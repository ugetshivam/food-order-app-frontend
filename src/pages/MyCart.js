import React, { useContext } from 'react'
import styles from './MyCart.module.css'
import { CartContext } from '../contexts/CartContext'
const MyCart = () => {
    const cartCtx = useContext(CartContext);
    const cart = cartCtx.cart;
    return (
        <div className={styles['cart']}>
            <h1>My Cart</h1>
            <ul>
                {
                    cart.map((item, idx)=>{
                        return <li key={idx}>
                            <p>{item.name}</p>
                            <p>{item.desc}</p>
                            <p>{item.qty}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default MyCart
