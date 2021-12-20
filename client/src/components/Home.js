import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import Recipients from '../pages/Recipients'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate= useNavigate()
    const [users, setUsers]= useState("")
    useEffect(()=>{
        fetch("/me").then((r) => {
            if (r.ok) {
              r.json().then((user) => setUsers(user));
            }
            else {
                navigate('/login')
            }
          });
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
