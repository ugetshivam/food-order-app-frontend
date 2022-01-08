import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import CartButton from '../UI/CartButton'
import styles from './MainNavigation.module.css';

const MainNavigation = (props) => {
    const history = useHistory();
    const handleClick = async()=>{
            // local url = http://localhost:8000/register
        // Heroku url = https://food-app-server-mern.herokuapp.com/register
        await axios.get("https://food-app-server-mern.herokuapp.com/logout", {withCredentials: true})
        .then((res)=>{
            console.log(res.data);
            props.setExist(false);
            history.push("/login");
        }).catch((err)=>{
            console.log(err);
        })
    }
    if(props.exist){
    return (
        <nav className={styles.nav}>
            <ul>
                <li style={{color:"white", cursor:"pointer"}}>Fake Cafe</li>
                <li><NavLink exact to="/allfoods">Menu</NavLink></li>
                <li><NavLink exact to="/my-cart"><CartButton/></NavLink></li>
                <li style={{color:"white", cursor:"pointer"}} onClick={handleClick}>Logout</li>
            </ul>
        </nav>
    )
    }
    return (
        <nav className={styles.nav}>
            <ul>
            <li style={{color:"white", cursor:"pointer"}}>Fake Cafe</li>
            <li><NavLink exact to="/login">Login</NavLink></li>
            <li><NavLink exact to="/signup">Sign Up</NavLink></li>
            </ul>
        </nav>
    )
}

export default MainNavigation