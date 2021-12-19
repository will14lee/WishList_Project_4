import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'

function Home() {
    const [users, setUsers]= useState()
    useEffect(()=>{
        fetch("/me")
        .then(resp=> resp.json())
        .then(setUsers)
    }, []);
    
    return (
        <div>
            <NavBar user={users} setUser={setUsers}/>
            <h1>Welcome Home {users ? (users.username) : ("User")}</h1>
            <h3><Link to= "/items">View Items</Link></h3>
            <h3><Link to= "/recipients">View Recipients</Link></h3>
        </div>
    )
}

export default Home
