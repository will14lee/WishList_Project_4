import React from 'react'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <NavBar/>
            <h1>Welcome Home</h1>
            <h3><Link to= "/items">Click to view items</Link></h3>
            <h3><Link to= "/recipients">Click to view recipients</Link></h3>
        </div>
    )
}

export default Home
