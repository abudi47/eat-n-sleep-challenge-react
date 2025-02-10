import { useState } from 'react'
import Freindslist from "./components/Freindslist";
import FormAddFreind from './components/FormAddFreind';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import './index.css'

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const [count, setCount] = useState(0);
  const [shower,setShower ] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFreind] = useState(null)

  function handleAddHandler(fr){

    setFriends((friends) => ([...friends,fr]))

}
  // console.log(shower)
  
function handleSelectedfr (fr){
  setSelectedFreind((cur) => cur?.id === fr.id ? null : fr);
  

}

  return (
    <div className='app'>
      <div className='sidebar'>
        <Freindslist onSelection={handleSelectedfr} freinds={friends} selectedFriend={selectedFriend} key={friends.id} />
        { shower && 
        <FormAddFreind onAddfriend={handleAddHandler}/>
        
        }

         
          <Button onClick={() => setShower((shower) => (!shower))}>
              {shower ? "close" : "Add freind"}
          </Button>
        
          

      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend}/>   
    }
    </div>
  )
}

export default App
