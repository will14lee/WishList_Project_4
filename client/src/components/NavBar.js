import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <ul><Link to="/home">Home</Link></ul>
            <ul><Link to="/recipients/new">Create recipient</Link></ul>
            <ul><Link to="/items/new">Create items</Link></ul>
        </div>
    )
}

export default NavBar
