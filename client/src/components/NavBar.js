import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <BrowserRouter>
                    <ul><Link to="/signup">Signup</Link></ul>
                    <ul><Link to="/login">Login</Link></ul>
                    <ul><Link to="/home">Home</Link></ul>
            </BrowserRouter>
        </div>
    )
}

export default NavBar
