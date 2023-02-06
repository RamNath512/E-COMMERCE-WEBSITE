import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import './ProductDetails.css'

const ProductDetails = () => {

    const [data, setData] = useState([])

    const loadData = async () => {
        const response = await axios.get('http://localhost:5000/api/get')
        setData(response.data)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
        <div style={{marginTop: '150px'}}>
            <h2>PRODUCT DETAILS</h2>
            <Link to='/admin/products/addProduct'>
                <button className = 'btn btn-addProduct'>Add Product</button>
            </Link>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{textAlign: 'center'}}>No.</th>
                        <th style={{textAlign: 'center'}}>Product Name</th>
                        <th style={{textAlign: 'center'}}>Product Cost ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key = {item.id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{item.pname}</td>
                                    <td>{item.pcost + '$'}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ProductDetails