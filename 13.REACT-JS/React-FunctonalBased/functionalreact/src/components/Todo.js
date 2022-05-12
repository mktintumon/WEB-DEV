import React, {useState} from 'react'

function Todo() {
  // hooks
  const[inputItem , setInputItem] = useState('')
  const[inputArray , setInputArray] = useState([])

  let additems = (items) =>{
    setInputArray([...inputArray , items])
    setInputItem('')
  }

  return (
    <div>
      <input type='text' value={inputItem} onChange={(e)=>setInputItem(e.target.value)}/>
      <button onClick={()=>additems(inputItem)}>Add Task</button>
      <ul>
        {
          inputArray.map((item)=>{
             return <li>{item}</li>
          })
        }
      </ul>
    </div>
    
  )
}

export default Todo