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
                        <p>Name: { recipients.name}, Age: { recipients.age}, Relationship: { recipients.relationship}</p>
                        <p><img src={ recipients.image_url } width="100" height="120"/></p>
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
