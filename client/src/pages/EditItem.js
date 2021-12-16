import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function EditItem() {
    const navigate= useNavigate()
    const [gift, setGift]= useState('')
    const [price, setPrice]= useState('')
    const [imageUrl, setImageUrl]= useState('')
    const [occasion, setOcassion]= useState('')
    const [description, setDescription]= useState('')
    return (
        <div>
            <h1>Edit Items!</h1>
            <p>Gift: <input placeholder= "Despicable Dragons" value={gift} onChange={(e)=>setGift(e.target.value)}/></p>
            <p>Price: $<input placeholder= "420.69" value={price} onChange={(e)=>setPrice(e.target.value)}/></p>
            <p>Image Url: <input  placeholder= ".jpg, .png, .com, .etc..." value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/></p>
            <p>Occasion: <input placeholder= "21st birthday, Tuesday 23rd..." value={occasion} onChange={(e)=>setOcassion(e.target.value)}/></p>
            <p>Description:</p> 
            <p><textarea placeholder="Eyemasks and headphones for Christmas family reunions." rows="5" cols="40" value={description} onChange={(e)=>setDescription(e.target.value)}/></p>
            <p><button onClick={()=> navigate("/items")}>Submit</button></p>
        </div>
    )
}

export default EditItem
