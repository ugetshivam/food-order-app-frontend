import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const handleRegister = ()=>{
        axios({
            method: "post",
            data:{
                username:registerUsername,
                password:registerPassword
            },
            withCredentials: true,
            url: "http://localhost:8000/register"
        }).then((res)=>console.log(res));
    }
    return (
        <form>
            <input type="text" placeholder="username" onChange={e=>setRegisterUsername(e.target.value)}/>
            <input type="password" placeholder="password" onChange={e=>setRegisterPassword(e.target.value)}/>
            <button onClick={handleRegister}>Submit</button>
        </form>
    )
}

export default Register
