import React, { Fragment, useContext } from 'react'
import { NavLink,Link } from 'react-router-dom'
import styles from './MainNavigation.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button
  } from "@mui/material";
import { CartContext } from '../../contexts/CartContext';
import { LoginContext } from '../../contexts/LoginContext';
const MainNavigation = () => {
    const cartCtx = useContext(CartContext);
    const logCtx = useContext(LoginContext);
    if(!logCtx.isLoggedin){
        return(
            <Box sx={{ flexGrow: 1 }}>  
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tomato
          </Typography>
          <Button color="inherit"><NavLink exact to="/">Login</NavLink></Button>
          <Button color="inherit"><NavLink exact to="/">Sign Up</NavLink></Button>
        </Toolbar>
      </AppBar>
    </Box>
        )
    }
    return (
        <nav className={styles.nav}>
            <ul>
                <li><NavLink exact to="/allfoods">Menu</NavLink></li>
                <li><NavLink exact to="/">Tomato</NavLink></li>
                <li><NavLink exact to="/mycart">
                    <Badge badgeContent={cartCtx.cartLength} color="error">
                        <ShoppingCartIcon/>
                    </Badge>
                    </NavLink></li>
            </ul>
        </nav>
    )
}

export default MainNavigation
