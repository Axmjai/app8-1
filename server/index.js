 const { request, response } = require('express')
const express=require('express')
 const app=express()
 const port= 8000

 app.get('/',(request,response) =>{
    response.send(`<!doctype html>
        <html>
        <head>
            <title>Express.js</title>
        </head>
        
        <body>
            <h3>Welcome to Express.js</h3>
            <b>
            Express.js Fast, unopinionated, minimalist<br>
            wed framework for Node.js
            </b>
        </body>
        </html>
    `)
 })
 app.listen(port,() => 
    console.log('Server listening on port'+port))