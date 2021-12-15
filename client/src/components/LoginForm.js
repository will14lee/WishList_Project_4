import React, {useState, useEffect} from 'react'

function LoginForm() {
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
    const [passwordConfirmation, setPasswordConfirmation] =useState('')
    const [imageUrl, setImageUrl]= useState('');
    const [bio, setBio]= useState('')

    function handleSubmit(e){
        e.preventDefault();
        fetch('./api/login', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    username,
                    password,
                    password_confirmation: passwordConfirmation,
                    image_url: imageUrl,
                    bio
                }),
        }).then((r)=> {
            setUsername('')
            setPassword('')
            setPasswordConfirmation('')
            setImageUrl('')
            setBio('')
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
                <input id= "password" value= {password} onChange={(e)=> setPassword(e.target.value)}></input>
            </p>
            <p>
                <label>Password Confirmation</label>
                <input id= "passwordConfirmation" value= {passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}></input>
            </p>
            <p>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </p>
        </div>
    )
}

export default LoginForm
