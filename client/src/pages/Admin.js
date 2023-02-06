import React, {useState} from 'react'
import {toast} from 'react-toastify'
import { useNavigate,Link } from 'react-router-dom'

import './Admin.css'

const Admin = () => {
    const [username, setUserName] = useState("")
    const [password,setPassword]=useState("")

    const navigate = useNavigate()

    const handleSubmit= (e) => {
        e.preventDefault()

        let uname = `${username}`
        let pass = `${password}`

        if ((uname === 'admin@gmail.com') && (pass === 'admin123@')) {
            toast.success('Admin has successfully logged in')
            navigate('/admin/products')
        }
        else
            toast.error('Please enter your credentials correctly')
    }
    return (
        <>
        <div className="head">
            <form onSubmit={handleSubmit}>
                <label>Username</label><br/>
                <input type="email" value={username} className="username"
                    onChange={(e) => setUserName(e.target.value)} required
                />
                
                <br/><br/>
                
                <label>Password</label><br/>
                <input type="password" value={password} className="password"
                    onChange={(e) => setPassword(e.target.value)} required
                />
                
                <br/><br/>
                
                <input type='submit' value = 'Login'/>
                <Link to = '/'>
                    <input type='button' value = 'Go Back'/>
                </Link>
            </form>
        </div>
        </>
    )
}

export default Admin