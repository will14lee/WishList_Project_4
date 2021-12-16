import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <p3><Link to="/home">Home</Link></p3>
            <br/>
            <p3><Link to="/recipients/new">Create recipient</Link></p3>
            <br/>
            <p3><Link to="/items/new">Create items</Link></p3>
            <br/>
            <p3><Link to="/">Logout</Link></p3>
        </div>
    )
}

export default NavBar
