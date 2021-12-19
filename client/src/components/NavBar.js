import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <Link to="/home">Home</Link>
            <br/>
            <Link to="/">Logout</Link>
        </div>
    )
}

export default NavBar
