import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function RecipientsForm() {
    const navigate= useNavigate()
    const [name, setName]= useState('')
    const [age, setAge]= useState('')
    const [relationship, setRelationship]= useState('')
    const [imageUrl, setImageUrl]= useState('')

    return (
        <div>
            <h1>Create Recipients!</h1>
            <p>Name: <input placeholder= "Taylor, Bob, Takahata" value={name} onChange={(e)=>setName(e.target.value)}/></p>
            <p>Age: <input placeholder= "34, 21, 69" value={age} onChange={(e)=>setAge(e.target.value)}/></p>
            <p>Relationship: <input placeholder= "Partner, Sweetheart, Vanya" value={relationship} onChange={(e)=>setRelationship(e.target.value)}/></p>
            <p>Image Url: <input  placeholder= ".jpg, .png, .com, .etc..." value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/></p>
            <p><button onClick={()=> navigate("/recipients")}>Submit</button></p>
        </div>
    )
}

export default RecipientsForm