const express = require ('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'password',
    database: "disagro_test"
})

app.get('/', (re, res) =>{
    return res.json("From Backend Side");
})

app.get('/ProductosServicios', (req,res) =>{
    const sql = "select * from ProductosServicios"
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    } )
} )

app.listen(8081, ()=>{
    console.log("listening")
})