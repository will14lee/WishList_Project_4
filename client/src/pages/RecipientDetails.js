import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function RecipientDetails() {
    const [recipients, setRecipients]= useState()
    const navigate= useNavigate()
    const params= useParams()

    useEffect(()=>{
        fetch(`/recipients/${params.id}`)
        .then(resp=> resp.json())
        .then(setRecipients)
    }, [])

    return (
        <div>
            {
                recipients ? (  
                    <div>
                        <p>Name: { recipients.name}, Age: { recipients.age}, Relationship: { recipients.relationship}</p>
                        <p><img src={ recipients.image_url } width="100" height="120" alt={`${recipients.image_url}`}/></p>
                <p>
                <button onClick={()=>navigate(`/${params.id}/edit`)}>Edit  </button>
                <button onClick={()=>navigate(`/${params.id}/items`)}>Create Items for this Recipient!</button>
                <button onClick={
                    function handleDelete(){
                        fetch(`/recipients/${params.id}`, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                        }).then((r)=> {
                            if (r.ok){
                                navigate(`/`)
                            }else {
                                r.json().then((err)=>console.log(err.errors))
                            }
                        })
                    }
                    }>Delete
                </button>
                </p>
                <button onClick={()=>navigate(`/`)}>Return  </button>

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
