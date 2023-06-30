//import express
const express = require('express')
const bodyParser = require('body-parser')
const  {
    allBooksController,
    createBookController,
    updateBookController,
    deleteBookController
} = require('./controllers')

//create express server instance
const server = express()

//middlewares
server.use(bodyParser.json())


// request handlers/ controllers
server.get('/book', allBooksController)
//- create  - post method
server.post('/book', createBookController)
//- update  - put method
server.put('/book', updateBookController)
//- delete  -delete method
server.delete('/book',deleteBookController)


//start server
server.listen (3000, ()=> console.log ('book app server is ready '))
