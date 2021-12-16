import React from 'react'
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <NavBar/>
            <h1>Welcome Home</h1>
            <h2><Link to= "/items">Click to view items</Link></h2>
            <h2><Link to= "/recipients">Click to view recipients</Link></h2>
        </div>
    )
}

export default Home
