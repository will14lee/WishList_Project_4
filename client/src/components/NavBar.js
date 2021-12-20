import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    function handleDelete(){
        fetch(`/logout`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((r)=> {
            if (r.ok){
                console.log("Goodbye")
            }else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }
    return (
        <div>
            <Link to="/login" onClick={()=>handleDelete()}>Logout</Link>
        </div>
    )
}

export default NavBar
