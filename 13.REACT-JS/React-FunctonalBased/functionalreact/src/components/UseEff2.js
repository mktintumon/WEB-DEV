import React , {useEffect, useState} from 'react'

function UseEff2() {

  const [count , setCount] = useState(0)
  const [name , setName] = useState('Mohit')


useEffect(()=>{
   document.title = `${count} ${name}`
  
}, []) // Dependency Array -> if blank -> nothing will update in title

  return (
    <div>
      <h1>This is a Counter {count}</h1>
      <h1>This is a Counter {name}</h1>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setName('Mktintumon')}>change name</button>
    </div>
  )
}

export default UseEff2