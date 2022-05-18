import React, { useState, useEffect } from 'react'
import { auth } from '../firebaseDemo'

function Fireauth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    let create = async () => {
        let resp = await auth.createUserWithEmailAndPassword(email, password)
        console.log(resp)
    }

    useEffect(() => {
        let unsubscrirbe = auth.onAuthStateChanged((user) => {
            setUser(user)
            return () => {
                unsubscrirbe() // clean up
            }
        })
    }, [])

    let logout = async () => {
        await auth.signOut()
    }

    let signin = async () => {
        await auth.signInWithEmailAndPassword(email, password)
    }

    return (
        <>
            {
                user == null ?

                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor='password'>password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={signin}>Sign in</button>
                </div>  :

                <>
                    <div>Welcome {user.email}</div>
                    <button onClick={logout}>Logout</button>
                </>
            }
        </>

    )
}

export default Fireauth