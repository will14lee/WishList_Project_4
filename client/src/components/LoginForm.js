import React, {useState, useEffect} from 'react'
import { baseUrl } from '../globals'

function LoginForm() {
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')


    function handleSubmit(e){
        e.preventDefault();
        fetch(`${baseUrl}/login`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    username,
                    password
                }),
        }).then((r)=> {
            setUsername('')
            setPassword('')
        });
        console.log("Submitted!")
    }


    return (
        <div>
            <h2>Login</h2>
            <p>
                <label>Username</label>
                <input id= "username" value= {username} onChange={(e)=> setUsername(e.target.value)}></input>
            </p>
            <p>
                <label>Password</label>
                <input type= "password" id= "password" value= {password} onChange={(e)=> setPassword(e.target.value)}></input>
            </p>
            <p>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </p>
        </div>
    )
}

export default LoginForm
