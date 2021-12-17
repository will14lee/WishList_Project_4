import React, {useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

function Items() {
    const navigate= useNavigate()
    const [items, setItems]= useState('')

    useEffect(()=>{
        fetch(`/items`)
        .then((resp)=> resp.json())
        .then(setItems)
    },[]);
    
    return (
        <div>
            <NavBar/>
            <h1>Items</h1>
            {items.length > 0 ? (
                items.map((e)=> 
                <div>
                    <p>Gift: { e.item}</p>
                    <p>Recipient: { e.recipient}</p>
                    <p>Price: ${ e.price}</p>
                    <p>Image Url: <img src={ e.imageUrl }/></p>
                    <p>Occasion: { e.occasion }</p>
                    <p>Description { e.description } </p>
                    <p><button onClick={()=> navigate("/items/edit")}>Edit  </button><button>Delete</button></p>
                </div>
                )):(
                    <h2>No Items made! You should make one!</h2>
                )
            }
        </div>
    )
}

export default Items
