import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <p4><Link to="/home">Home</Link></p4>
            <br/>
            <p4><Link to="/recipients/new">Create recipient</Link></p4>
            <br/>
            <p4><Link to="/items/new">Create items</Link></p4>
        </div>
    )
}

export default NavBar
