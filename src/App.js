import React, { useState } from 'react';

import './App.css';
import Todolist from './component/Todolist';

function App() {
 const[inputdata,setInputData] = useState("")
 const[item,setItem] = useState([])
 const[updatetodo, setupdatetodo ] = useState(false)
 const [updateitem,setupdateitem] = useState()

 const additem=()=>{
if(!inputdata){
 alert("plz fill the data")
}

else if(inputdata && updatetodo){


  setItem(
    item.map((elem) => elem.id === updateitem ? {...elem ,name:inputdata} : elem) 
  )

  setupdatetodo(false)
  setInputData("")
  setupdateitem("")
}

else{
 const allinputdata = {
   id:new Date().getTime().toString(),
   name:inputdata
 }

 setItem([...item , allinputdata])
 setInputData("")
 

}


 }

 const DeleteItem =(id)=>{
  setItem(
    item.filter((elem)=> elem.id !== id))
}

const Updateitem = (id)=>{

    let newedit = item.find((elem)=> {
      return elem.id === id 
    })

   
    setupdatetodo(true)
    setInputData(newedit.name)
    setupdateitem(id)
   

}

const clearall = () =>{
  setItem([])
}

  return (
    <div className="App">
        <div className='container'>

               <div className='add_item'>
                 <input type="text" 
                  placeholder='type here...' 
                  value={inputdata} 
                  onChange={(e)=>setInputData(e.target.value)}                    
                  />
                  {updatetodo ? <button onClick={additem}><i className="fa-solid fa-pen-to-square edit"></i></button> :  <button onClick={additem}><i className="fa-solid fa-circle-plus"></i></button>}

                  <div className='empty'>{item.length === 0 && <div><i className="fa-solid fa-clipboard-list"></i> ToDo List Empty <i className="fa-solid fa-clipboard-list"></i></div>}</div>
                 
               </div>
                    <div className='Todo_container'>
                  {item.map((elem)=> <Todolist key = {elem.id} item = {elem} DeleteItem = {DeleteItem} Updateitem = {Updateitem} todoitem = {item}/>

                  )}
                  <div className='delete'>
                  <button className='clear' onClick={()=>clearall()}><b>clear All</b></button>
                  </div>
                  </div>
 

        </div>
    </div>
  );
}

export default App;
