import { Button } from '@mui/material'
import React, { useContext, useRef } from 'react'
import styles from './Food.module.css'
import { CartContext } from '../../contexts/CartContext'
const Food = (props) => {
    const cartCtx = useContext(CartContext);
    const inputQtyRef = useRef();

    // console.log(cartCtx.addItemHandler);
    
    const addToCart = ()=>{
    cartCtx.addItemHandler({
            id:props.id,
            name:props.name,
            desc: props.desc,
            price: props.price,
            qty:inputQtyRef.current.value
        })
    }


    return (
            <li className={styles['food-item']}>
                <div>
                <p>{props.name}</p>
                <p>{props.desc}</p>
                <p>&#8377;{props.price}</p>
                </div>
                <div className={styles['inps']}>
                    <input
                        type="number"
                        min='1'
                        defaultValue={1}
                        ref={inputQtyRef}
                    />
                    <Button variant="contained" color="success" onClick={addToCart}>ADD</Button>
                </div>
            </li>
    )
}

export default Food
