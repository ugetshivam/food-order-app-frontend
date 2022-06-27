import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import styles from './SignUp.module.css'
import axios from 'axios';
const SignUp = () => {
    const history = useHistory();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler= async(e)=>{
        e.preventDefault();
        const userObject = {
            username: username,
            email: email,
            password: password
        };
        // local url = http://localhost:8000/register
        // Heroku url = https://food-app-server-mern.herokuapp.com/register
        await axios.post('http://localhost:8000/register', userObject)
        .then((res)=>{
            console.log(res.data);
            setUserName("");
            setEmail("");
            setPassword("");
            history.push("/login");
        }).catch((error)=>{
            console.log(error);
        });
    }
    const userHandler = (e)=>{
        setUserName((prevState)=>{
            return e.target.value;
        })
    }
    const passHandler = (e)=>{
        setPassword((prevState)=>{
            return e.target.value;
        })
    }
    const emailHandler = (e)=>{
        setEmail((prevState)=>{
            return e.target.value;
        })
    }
    return (
        <div className={styles.signup}>
            <h1 className={styles.h}>Sign Up</h1>
            <form className={styles.form} onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input className={styles.inp} type="text" id="username" onChange={userHandler} value={username}/>
                <br/>
                <br/>
                <label htmlFor="email">Email</label>
                <input className={styles.inp} type="email" id="email" onChange={emailHandler}  value={email}/>
                <br/>
                <br/>
                <label htmlFor="password">Password</label>
                <input className={styles.inp} type="password" id="password" onChange={passHandler}  value={password}/>
                <br/>
                <br/>
                <input className={styles.btn} type="submit"/>
            </form>
        </div>
    )
}

export default SignUp;
