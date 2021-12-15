import React, {useState, useEffect} from 'react'

function SignUpForm() {
    const [username, setUsername] =useState('')
    const [password, setPassword] =useState('')
    const [passwordConfirmation, setPasswordConfirmation] =useState('')
    const [imageUrl, setImageUrl]= useState('');
    const [bio, setBio]= useState('')

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/signup`, {
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
            console.log(`Hello ${username}!`)
            setUsername('')
            setPassword('')
            setPasswordConfirmation('')
            setImageUrl('')
            setBio('')
        });
    }


    return (
        <div>
            <h2>Signup</h2>
            <p>
                <label>Username</label>
                <input id= "username" value= {username} onChange={(e)=> setUsername(e.target.value)}></input>
            </p>
            <p>
                <label>Password</label>
                <input type= "password" id= "password" value= {password} onChange={(e)=> setPassword(e.target.value)}></input>
            </p>
            <p>
                <label>Password Confirmation</label>
                <input type= "password" id= "passwordConfirmation" value= {passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)}></input>
            </p>
            <p>
                <label>Image Url</label>
                <input id= "imageUrl" value= {imageUrl} onChange={(e)=> setImageUrl(e.target.value)}></input>
            </p>            <p>
                <label>Bio</label>
            </p>
                <textarea rows="5" cols="40" id= "bio" value= {bio} onChange={(e)=> setBio(e.target.value)}></textarea>
            <p>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </p>
        </div>
    )
}

export default SignUpForm
