import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import Recipients from '../pages/Recipients'

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
            <Recipients/>
        </div>
    )
}

export default Home
