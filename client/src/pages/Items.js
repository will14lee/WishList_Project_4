import React, {useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import { useParams, useNavigate, Link } from 'react-router-dom';

function Items() {
    const params= useParams()
    const navigate= useNavigate()
    const [items, setItems]= useState('')
    const [recipients, setRecipients]= useState('')
    const [deleted, setDeleted]= useState('')


    useEffect(()=>{
        fetch(`/recipients/${params.recipients_id}/items`)
        .then((resp)=> resp.json())
        .then(setItems)

        fetch(`/recipients/${params.recipients_id}`)
        .then((resp)=> resp.json())
        .then(setRecipients)
    },[deleted]);


    // function handleDelete(){
       
    // }
    return (
        <div>
            <h1>{recipients.name}'s Items</h1>
            <Link to= "new">Create Items</Link>
            {items.length > 0 ? (
                items.map((e)=> 
                <div>
                    <p>Gift: { e.name}</p>
                    <p>Price: ${ e.price}</p>
                    <p><img src={ e.image_url } width="100" height="120" alt={`${e.image_url}`}/></p>
                    <p>Occasion: { e.occasion }</p>
                    <p>Description { e.description } </p>
                    <p><button onClick={()=> navigate(`/${params.recipients_id}/items/${e.id}/edit`)}>Edit  </button>
                    <button onClick={()=>
                     fetch(`/recipients/${params.recipients_id}/items/${e.id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                    }).then((r)=> {
                        if (r.ok){
                            console.log(`${e.name} has been deleted`)
                            setDeleted(!this)
                        }else {
                            r.json().then((err)=>console.log(err.errors))
                        }
                    })
                    }>Delete</button>
                    </p>
                </div>
                )):(
                    <div>
                        <h3>No Items! You should make one!</h3>
                        <button onClick={()=>navigate(`/${params.recipients_id}/items/new`)}>Create an Item</button>
                    </div>
                )}
                <button onClick={()=>navigate(`/${params.recipients_id}`)}>Return to {recipients.name}'s Details </button>

        <NavBar/>
        </div>
    )
}

export default Items
