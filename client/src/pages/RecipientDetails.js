import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function RecipientDetails() {
    const [recipients, setRecipients]= useState()
    const [updated, setUpdated]= useState()
    const navigate= useNavigate()
    const params= useParams()

    useEffect(()=>{
        fetch(`/recipients/${params.id}`)
        .then(resp=> resp.json())
        .then(setRecipients)
        .then(console.log(`/recipients/${params.id}`))
    }, [])

    return (
        <div>
            {
                recipients ? (  
                    <div>
                        <p>By: {recipients.user.username}</p>
                        <p>Name: { recipients.name}</p>
                        <p>Age: { recipients.age}</p>
                        <p>Relationship: { recipients.relationship}</p>
                        <p>Image Url: <img src={ recipients.image_url }/></p>
                        
                <p>
                <button onClick={()=>navigate(`/recipients/${params.id}/edit`)}>Edit  </button>
                <button onClick={
                    function handleDelete(){
                        fetch(`/recipients/${params.id}`, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                        }).then((r)=> {
                            if (r.ok){
                                navigate(`/recipients`)
                                console.log(params.id)
                            }else {
                                r.json().then((err)=>console.log(err.errors))
                            }
                        })
                    }
                    }>Delete</button></p>
                    </div>
                    ) : (
                    <div>
                        <p>Nothing here!</p>
                    </div>)
                    }
        </div>
        )
            }

export default RecipientDetails
