import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MainNavigation.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
const MainNavigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><NavLink exact to="/allfoods">Menu</NavLink></li>
                <li><NavLink exact to="/mycart">
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon/>
                    </Badge>
                    </NavLink></li>
            </ul>
        </nav>
    )
}

export default MainNavigation
