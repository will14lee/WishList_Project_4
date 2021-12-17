import React, {useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import { useNavigate, Link } from 'react-router-dom';

function Recipients() {
    const navigate= useNavigate()
    const [recipients, setRecipients]= useState('')

    useEffect(()=>{
        fetch("/recipients")
        .then(resp=> resp.json())
        .then(setRecipients)
    }, []);
    

    function handleDelete(){
        fetch("/recipients/:id", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((r)=> {
            if (r.ok){
                navigate("/recipients")
                console.log(r)
            }
            else {
                r.json().then((err)=>console.log(err.errors))
            }
        })
    }
    return (
        <div>
            <NavBar/>
            <h1>Recipients</h1>
            {recipients.length > 0 ? (recipients.map((recipient)=>
                <div>
                    <p>Name: { recipient.name}</p>
                    <p>Age: { recipient.age}</p>
                    <p>Relationship: { recipient.relationship}</p>
                    <p>Image Url: <img src={ recipient.image_url }/></p>
                    <p><button onClick={()=>navigate("/recipients/edit")}>Edit  </button><button onClick={handleDelete}>Delete</button></p>
                </div>
                )):(
                    <div>
                    <h3>No Recipients! You should make one!</h3>
                    <button onClick={()=>navigate('/recipients/new')}>Create a Recipient</button>
                    </div>
                )}
        </div>
    )
}
export default Recipients
