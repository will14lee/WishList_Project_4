import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
                    <ul><Link to="/signup">Signup</Link></ul>
                    <ul><Link to="/login">Login</Link></ul>
                    <ul><Link to="/home">Home</Link></ul>
        </div>
    )
}

export default NavBar
