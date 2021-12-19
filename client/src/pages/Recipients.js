import React, {useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import { useNavigate, Link } from 'react-router-dom';

function Recipients() {
    const navigate= useNavigate()
    const [recipients, setRecipients]= useState('')
    const [toDelete, setToDelete]= useState('')
    useEffect(()=>{
        fetch("/recipients")
        .then(resp=> resp.json())
        .then(setRecipients)
    }, []);
    


    return (
        <div>
            <NavBar/>
            <h1>Recipients</h1>
            {recipients.length > 0 ? (recipients.map((recipient)=>
                <div key={recipient.id} name={recipient.id}>
                    <p>By: {recipient.user.username}</p>
                    <p>Id: {recipient.id}</p>
                    <p>Name: { recipient.name}</p>
                    <p>Age: { recipient.age}</p>
                    <p>Relationship: { recipient.relationship}</p>
                    {/* <p>Image Url: <img src={ recipient.image_url }/></p> */}
                    <p>
                        <button onClick={()=>navigate(`/recipients/${recipient.id}`)}>Details  </button>
                    </p>
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
