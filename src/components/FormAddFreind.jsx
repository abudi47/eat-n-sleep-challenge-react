

import React from 'react'
import { useState } from 'react'
import { useEffect } from "react"
import Button from './Button'

const FormAddFreind = ({onAddfriend}) => {
    const [name, setName] = useState ("");
    const [image, setImage] = useState("https://i.pravatar.cc/48")
    const id = crypto.randomUUID();

   
    function submithandler(e) {
        e.preventDefault();

        if (!name || !image) return;


        const newFriend = {
            id,
            name,
            imageUrl : `${image}?=${id}`,
            balance: 0,

            
        }
        onAddfriend(newFriend);
        console.log(onAddfriend)
        console.log(image)

        setName("");
        setImage("https://i.pravatar.cc/48");



    }

  return (
    <form className='form-add-freind' onSubmit={submithandler}>
            <label>👫 FriendName</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>🖼️ Image URL </label>
            <input type='text' value={image} onChange={(e) => setImage(e.target.value) }/>
         
            <Button>Add</Button>
            <br></br>

        </form>
  )
}

export default FormAddFreind
