import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
function LoginForm() {
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
    const navigate= useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/login`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    username,
                    password
            }),
        }).then((r) => {
            if(r.ok){
                setUsername('')
                setPassword('')
                navigate('/')
                console.log("Submitted!")
            }
            else{
                console.log(r.status.errors)
            }
        })
    }


    return (
        <div>
            <h1>Wishlist Creator</h1>
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
                <button type="submit" onClick={handleSubmit}>Login</button>
            </p>
            <p>Don't Have an account? <Link to="/signup">Sign up here!</Link></p>
        </div>
    )
}

export default LoginForm