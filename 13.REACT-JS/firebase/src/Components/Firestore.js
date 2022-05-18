import React, { useState, useEffect } from 'react'
import {database} from '../firebaseDemo'

function Firestore() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    // CRUD property - create , read , update , detele


    // create
    let createUserInDB = async()=>{
        //  let resp = await database.users.add({name , age})
        let resp = await database.users.doc('1111111').set({name , age})
        console.log(resp)
    }

    // read
    useEffect(async()=>{
        //let uid = 'gDOZV8oUg1mnCPwjiNom'
        //let data = await database.users.doc(uid).get()
        //console.log(data.data())

        // let data = await database.users.orderBy('createdAt','desc').get(); //onSnapShot //READ

        let data = await database.users.get()
        data.forEach((obj)=>console.log(obj.data()))
    })

    // update
    let updateUser = async() => {
        
        let uid = 'gDOZV8oUg1mnCPwjiNom'
        await database.users.doc(uid).update({ //UPDATE COMMAND
            name,age
        })
    }

    // delete
    let deleteUser = async() => {
        // let uid = 'gDOZV8oUg1mnCPwjiNom'
        let uid = '1111111'
        await database.users.doc(uid).delete()
    }

    return (
        <>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="age">Age</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                {/* <button onClick={createUserInDB}>Create</button> */}
                <button onClick={updateUser}>Create</button>
                <button onClick={deleteUser}>Delete</button>
            </div>
        </>
    )
}

export default Firestore