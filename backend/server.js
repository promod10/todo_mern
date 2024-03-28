require('dotenv').config
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes/todoRoutes')


const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

MONDODB_URL = 'mongodb+srv://pramod:promod@cluster0.takbfka.mongodb.net/todo_mern?retryWrites=true&w=majority&appName=Cluster0'

mongoose
    .connect(MONDODB_URL)
    .then(() => {
        console.info("Database connected Successfully!")
    })
    .catch((err) => {
        console.log("Error: ", err)
    })


app.use(routes)
app.listen(port, () => console.log(`Server start at http://localhost:${port}`))