import React, { useState } from 'react'
import styles from './SignUp.module.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import FlashMessage from 'react-flash-message'
const Login = (props) => {
    const history = useHistory();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(false);
    // local url = http://localhost:8000/register
        // Heroku url = https://food-app-server-mern.herokuapp.com/register
    const submitHandler= async(e)=>{
        e.preventDefault();
        const userObject = {
            username: username,
            password: password
        };
        await axios.post('https://food-app-server-mern.herokuapp.com/login', userObject, {withCredentials: true})
        .then((res)=>{
            console.log(res.data);
            setUserName("");
            setPassword("");
            setMessage(false);
            props.setExist(true);
            history.push("/allfoods")
        }).catch((error)=>{
            setMessage(true);
            console.log(error);

        });
        setUserName("");
        setPassword("");
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
    return (
        <div className={styles.signup}>
            <h1>Login</h1>
            {message?
            <FlashMessage duration={5000} persistOnHover={true}>
                <strong>Username or Password is incorrect</strong>
            </FlashMessage>:""
            }
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={userHandler} value={username}/>
                <br/>
                <br/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={passHandler}  value={password}/>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Login;
