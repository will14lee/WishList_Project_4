import React, {useState, useEffect } from 'react'
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

function Items() {
    const navigate= useNavigate()
    // const [item, setItem]= useState('')
    const bro= {
        gift: "Beyblade",
        recipient: "Brother",
        price: 4,
        imageUrl: "https://beyblade.hasbro.com/en-us",
        occasion: "Birthday",
        description: "Bro wanted blue beyblade to play with his friends"
    }

    useEffect(()=>{
    //     fetch(`${baseUrl}/items`)
    //     .then(resp=> resp.json())
    //     .then(data=> setItem)
    });
    function itemForm(e){
        return (
        <div>
            <p>Gift: { e.gift}</p>
            <p>Recipient: { e.recipient}</p>
            <p>Price: ${ e.price}</p>
            <p>Image Url: <img src={ e.imageUrl }/></p>
            <p>Occasion: { e.occasion }</p>
            <p>Description { e.description } </p>
            <p><button onClick={()=> navigate("/items/edit")}>Edit  </button><button>Delete</button></p>
        </div>
        )
    }

    const renderItem= ()=> {
        return itemForm(bro)
    }
    return (
        <div>
            <NavBar/>
            <h1>Items</h1>
            { renderItem() }
        </div>
    )
}

export default Items
