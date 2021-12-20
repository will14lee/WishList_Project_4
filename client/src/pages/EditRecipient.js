import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function EditRecipient() {
    const navigate= useNavigate()
    const [name, setName]= useState('')
    const [age, setAge]= useState('')
    const [relationship, setRelationship]= useState('')
    const [imageUrl, setImageUrl]= useState('')
    const [recipients, setRecipients]= useState('')
    const params= useParams()

    useEffect(()=>{
        fetch(`/recipients/${params.id}`)
        .then(resp=> resp.json())
        .then(setRecipients)
    }, [])

    function handleSubmit(){
        fetch(`/recipients/${params.id}`, {
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
                navigate("/")
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
            <p>Name: <input placeholder= {recipients.name} value={name} onChange={(e)=>setName(e.target.value)}/></p>
            <p>Age: <input placeholder= {recipients.age} value={age} onChange={(e)=>setAge(e.target.value)}/></p>
            <p>Relationship: <input placeholder= {recipients.relationship} value={relationship} onChange={(e)=>setRelationship(e.target.value)}/></p>
            <p>Image Url: <input  placeholder= {recipients.image_url} value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/></p>
            <p>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={()=>navigate("/")}>Return</button>
            </p>
        </div>
    )
}

export default EditRecipient