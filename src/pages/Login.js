import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const handleLogin = ()=>{
        axios({
            method: "post",
            data:{
                username:loginUsername,
                password:loginPassword
            },
            withCredentials: true,
            url: "http://localhost:8000/login"
        }).then((res)=>console.log(res));
    }
    return (
        <form>
            <input type="text" placeholder="username" onChange={e=>setLoginUsername(e.target.value)}/>
            <input type="password" placeholder="password" onChange={e=>setLoginPassword(e.target.value)}/>
            <button onClick={handleLogin}>Submit</button>
        </form>
    )
}

export default Login
