import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <Link to="/home">Home</Link>
            <br/>
            <Link to="/recipients/new">Create recipient</Link>
            {/* <br/> */}
            {/* <Link to="/items/new">Create items</Link> */}
            <br/>
            <Link to="/">Logout</Link>
        </div>
    )
}

export default NavBar
