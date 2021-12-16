import React, {useState, useEffect } from 'react'
import NavBar from '../components/NavBar';

function Recipients() {
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
    //     fetch(`${baseUrl}/recipients`)
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
        </div>
        )
    }

    const renderItem= ()=> {
        return itemForm(bro)
    }
    return (
        <div>
            <NavBar/>
            <h1>Recipients</h1>
            { renderItem() }
        </div>
    )
}

export default Recipients
