import React from 'react'

const Todolist = (props) => {
 
    const  {item , DeleteItem, Updateitem , todoitem} = props
    console.log(todoitem.length)

  return (
   <>
    
    <div className='align-item'>
       
        <div className='todoitem'>{item.name}</div>
        <div>
        <i onClick={()=>Updateitem(item.id)} className="fa-solid fa-pen-to-square edit"></i>
        <i onClick={()=> DeleteItem(item.id)} className="fa-solid fa-trash-can red"></i>
        </div>
    </div>

    </>
  )
}

export default Todolist