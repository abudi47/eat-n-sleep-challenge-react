import React, { useState } from 'react'
import Button from './Button'
const FormSplitBill = ({selectedFriend}) => {
    // console.log(selectedFriend)

   const [bill , setBill] = useState("");
   const [paidByUser , setPaidByUser] = useState(""); 
   const [whoIsPaying , setWhoIsPaying] = useState("sue"); 
   console.log(whoIsPaying)
   console.log(paidByUser)
   console.log(bill)

  return (
    <form className='form-split-bill'>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰Bill value</label>
        <input type='text' value={bill} onChange={(e) => setBill(Number(e.target.value))} />

        <label>👦Your expenses</label>
        <input type='text' value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value))}/>

        <label>👫{selectedFriend.name} expenses</label>
        <input type='text'/>

        <label>🤑Who's playing the bill</label>
        <select >
            <option value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>You</option>
            <option value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>{selectedFriend.name}</option>

            </select>
m
        <Button > split bill</Button>n


    </form>
  )
}

export default FormSplitBill