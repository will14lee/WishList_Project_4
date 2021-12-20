import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RecipientsForm() {
    const navigate= useNavigate()
    const [name, setName]= useState('')
    const [age, setAge]= useState('')
    const [relationship, setRelationship]= useState('')
    const [imageUrl, setImageUrl]= useState('')
    const [users, setUsers]= useState('')
    useEffect(()=>{
        fetch("/me").then((r) => {
            if (r.ok) {
              r.json().then((user) => setUsers(user));
            }
            else {
                navigate('/login')
            }
          });
    }, []);

    function handleSubmit(){
        fetch("/recipients", {
            method: "POST",
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
            <h1>Create Recipients!</h1>
            <p>Name: <input placeholder= "Taylor, Bob, Takahata" value={name} onChange={(e)=>setName(e.target.value)}/></p>
            <p>Age: <input placeholder= "34, 21, 69" value={age} onChange={(e)=>setAge(e.target.value)}/></p>
            <p>Relationship: <input placeholder= "Partner, Sweetheart, Vanya" value={relationship} onChange={(e)=>setRelationship(e.target.value)}/></p>
            <p>Image Url: <input  placeholder= ".jpg, .png, .com, .etc..." value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/></p>
            <p>
                <button onClick={()=>handleSubmit()}>Submit</button>
                <button onClick={()=>navigate(`/`)}>Return  </button>
            </p>

        </div>
    )
}

export default RecipientsForm