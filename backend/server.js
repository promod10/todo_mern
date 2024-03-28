require('dotenv').config
const express = require('express')
const mongoose = require('mongoose');


const app = express()
const port = process.env.PORT || 5000

MONDODB_URL = 'mongodb+srv://pramod:promod@cluster0.takbfka.mongodb.net/todo_mern?retryWrites=true&w=majority&appName=Cluster0'
// const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };

mongoose
    .connect(MONDODB_URL)
    .then(() => {
        console.info("Database connected Successfully!")
    })
    .catch((err) => {
        console.log("Error: ", err)
    })

// mongoose.connect(MONGODB_URL)
//     .then(() => console.log('Database Connected Successfully!'))
//     .catch((err) => console.log("Database Connection Error: ", err))



app.get('/', (req, res) => res.send('TODO app using mern'))
app.listen(port, () => console.log(`Server start at http://localhost:${port}`))