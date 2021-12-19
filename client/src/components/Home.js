import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'

function Home() {
    const [user, setUser]= useState()
    // useEffect(() => {
    //     fetch("/me")
    //     .then((r)=> {r.json()
    //     .then((r)=> setUser);
    //     console.log(r)
    //         }
    //     })
    // }, []);

    useEffect(()=>{
        fetch(`/me`)
        .then((resp)=> resp.json())
        .then(setUser)
        .then(()=>console.log(user))
    },[]);
    return (
        <div>
            <NavBar user={user} setUser={setUser}/>
            <h1>Welcome Home</h1>
            <h3><Link to= "/items">View Items</Link></h3>
            <h3><Link to= "/recipients">View Recipients</Link></h3>
        </div>
    )
}

export default Home
