const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')

const mysql = require('mysql2')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ecommerce_db'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM products_details"
    
    db.query(sqlGet, (err, result) => {
        res.send(result)
    })
})

app.post("/api/post", (req, res) => {
    const {pname, pcost} = req.body
    const sqlInsert = "INSERT INTO products_details(pname, pcost) VALUES(?, ?)"

    db.query(sqlInsert, [pname, pcost], (err, result) => {
        if (err)
            console.log(err)
    })
})

app.get("/", (req, res) => {
    res.send('Hello, Express JS')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})