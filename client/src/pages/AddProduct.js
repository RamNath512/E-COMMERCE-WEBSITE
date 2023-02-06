import React, {useState, useEffect} from 'react'

import { useNavigate,Link } from 'react-router-dom'

import axios from 'axios'
import {toast} from 'react-toastify'

import './AddProduct.css'

const initialState = {
    pname: '',
    pcost: 0
}

const AddProduct = () => {

    const [state, setState] = useState(initialState)

    const {pname, pcost} = state

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!pname || !pcost)
            toast.error('Please provide value into each input field')
        else if (pcost <= 0)
            toast.error('Cost cannot be less than (or) equal to zero')
        else {
            axios.post('http://localhost:5000/api/post', {
                pname,
                pcost
            })
            .then(() => {
                setState({pname: '', pcost: 0})
            })
            .catch((err) => toast.error(err.response.data))
            toast.success('Product Added Successfully')
            navigate('/admin/products')
        }
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    return (
        <>
        <div style = {{marginTop: '120px'}}>
            <h2>ADD EDIT</h2>
            <form style = {{
                margin: 'auto',
                padding: '15px',
                maxWidth: '400px',
                alignContent: 'center'
            }}
            onSubmit = {handleSubmit}
            >
                <label htmlFor='pname'>Product Name</label>
                <input
                    type = 'text'
                    id = 'pname'
                    name = 'pname'
                    placeholder = 'Enter product name'
                    value = {pname}
                    onChange = {handleInputChange}
                />

                <label htmlFor='pcost'>Product Cost</label>
                <input
                    type = 'number'
                    id = 'pcost'
                    name = 'pcost'
                    placeholder = 'Enter product cost'
                    value = {pcost}
                    onChange = {handleInputChange}
                />

                <input type='submit' value = 'Add Product'/>
                <Link to = '/admin/products'>
                    <input type='button' value = 'Go Back'/>
                </Link>
            </form>
        </div>
        </>
    )
}

export default AddProduct