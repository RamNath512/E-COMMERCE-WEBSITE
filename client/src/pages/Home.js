import React, {useState, useEffect} from 'react'

import axios from 'axios'

import './Home.css'

const Home = () => {
    const [data, setData] = useState([])

    const loadData = async () => {
        const response = await axios.get('http://localhost:5000/api/get')
        setData(response.data)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <div className="Navhead">
                <ul className="nav-list">
                    <li className="navlink"><a href="/">Home</a> 
                    </li>
                </ul>
                <a href="/admin"><button className="signin">Admin Login</button></a>
            </div>
            <div className="body">
                <h2>Welcome!</h2>
                <p>A website that give great scale of products in every corner of the world</p>
                <p>A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.</p>
                <p>Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>

                <table style = {{marginTop: '50px'}} className='styled-table'>
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
        </div>
    )
}

export default Home