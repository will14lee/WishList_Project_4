import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import Recipients from '../pages/Recipients'

function Home() {
    const [users, setUsers]= useState("")
    useEffect(()=>{
        fetch("/me")
        .then(resp=> resp.json())
        .then(setUsers)
    }, []);
    // await console.log(users)
    return (
        <div>
            <h1>Hello {users ? (users.username) : ("User")}, Welcome to the Wishlist Creator!</h1>
            <Recipients/>
            <NavBar user={users} setUser={setUsers}/>
        </div>
    )
}

export default Home
