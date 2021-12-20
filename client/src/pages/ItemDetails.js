import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function ItemDetails() {
    const [items, setItems]= useState('')
    const params= useParams()
    useEffect(()=>{
        fetch(`/recipients/${params.recipients_id}/items${params.id}`)
        .then(resp=> resp.json())
        .then(setItems)
    }, [])
    console.log(items)
    
    return (
        <div>
            
        </div>
    )
}

export default ItemDetails
