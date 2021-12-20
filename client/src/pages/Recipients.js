import React, {useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Recipients() {
    const navigate= useNavigate()
    const [recipients, setRecipients]= useState('')

    useEffect(()=>{
        fetch("/recipients")
        .then(resp=> resp.json())
        .then(setRecipients)
    }, []);
    


    return (
        <div>
            <h1>Recipients</h1>
            <h2><Link to="/new">Create a recipient</Link></h2>
            {recipients.length > 0 ? (recipients.map((recipient)=>
                <div key={recipient.id} name={recipient.id}>
                    <p>Name:</p>
                        <h3>{ recipient.name}</h3>
                    <p><img src={ recipient.image_url } width="100" height="120" alt={`${recipients.image_url}`}/></p>
                    <p>
                        <button onClick={()=>navigate(`/${recipient.id}`)}>Details  </button>
                    </p>
                </div>
                )):(
                    <div>
                    <h3>No Recipients! You should make one!</h3>
                    <button onClick={()=>navigate('/new')}>Create a Recipient</button>
                    </div>
                )}
        </div>
    )
}
export default Recipients
