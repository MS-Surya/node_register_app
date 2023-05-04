// import, require
const express = require('express')
const conn = require('./connection')
const app= express()
const port = 3000
var bodyParser = require('body-parser')
var table = "details"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended :true}))


// views 

app.get("/",(req,resp) => {
    resp.send("Hello Node API")
})

app.get("/register",(req,resp) => {
    resp.render("register.ejs")
})


app.post("/register", (req, resp) => {
var name = req.body.name
var email = req.body.email
var password= req.body.password
    conn.connect((error) => {
        if(error) throw error

        conn.query(`INSERT INTO ${table}(name,email,password) VALUES (?,?,?)`,[name,email,password], (error,result) =>{
            if(error) throw error
            resp.send("Details Registered Succesfully")

        })
    })
})



app.listen(port, 
    () => {
    console.log("Listening on 3000")
})
