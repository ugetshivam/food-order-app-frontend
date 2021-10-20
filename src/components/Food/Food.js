import { Button } from '@mui/material'
import React, { Fragment } from 'react'
import styles from './Food.module.css'
const Food = (props) => {
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
                        defaultValue='1'
                    />
                    <Button variant="contained" color="success">ADD</Button>
                </div>
            </li>
    )
}

export default Food
