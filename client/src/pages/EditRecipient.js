import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function EditRecipient() {
    const navigate= useNavigate()
    const [name, setName]= useState('')
    const [age, setAge]= useState('')
    const [relationship, setRelationship]= useState('')
    const [imageUrl, setImageUrl]= useState('')

    function handleSubmit(){
        fetch("/recipients/:id", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                age,
                relationship,
                image_url: imageUrl,
            }),
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
            <h1>Edit Recipients!</h1>
            <p>Name: <input placeholder= "Donald, Drake, Dre" value={name} onChange={(e)=>setName(e.target.value)}/></p>
            <p>Age: <input placeholder= "9, 16, 39 but still in early 30's" value={age} onChange={(e)=>setAge(e.target.value)}/></p>
            <p>Relationship: <input placeholder= "Friend, Pastor, Nemesis " value={relationship} onChange={(e)=>setRelationship(e.target.value)}/></p>
            <p>Image Url: <input  placeholder= ".jpg, .png, .com, .etc..." value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/></p>
            <p><button onClick={handleSubmit}>Submit</button></p>
        </div>
    )
}

export default EditRecipient