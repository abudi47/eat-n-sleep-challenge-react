import React from 'react'
import Button from './Button';


const Freindslist = ({freinds, onSelection , selectedFriend}) => {
  // const freinds = initialFriends;

  // console.log(onSelection)
  return (
    <div>
      {freinds.map((e)=> (
        
            <Freind key={e.id} selectedFriend={selectedFriend} onSelection={onSelection} freind={e}/>
                
        ))}
    </div>
  )
}


export default Freindslist


function Freind ({freind, onSelection, selectedFriend}) {
  // console.log(onSelection)

  const isSelected =  selectedFriend?.id === freind.id;

  return (
    <li className={ isSelected ? "selected" : ""}>
      <img src={freind.image} alt={freind.name} /> 
     <h3> {freind.name} </h3>

     {freind.balance < 0 && <p className='red'>You owe {freind.name} {Math.abs(freind.balance)}$ </p>}
     {freind.balance > 0 && <p className='green'>{freind.name} owes you  {freind.balance}$ </p>}
     {freind.balance === 0 && <p>You and {freind.name} are even</p>}

    <Button onClick={() => onSelection(freind)}>{isSelected ? "Deselect" : "Select"}</Button>
    </li>


  )

}