require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoute = require('./routes/users.js')
const favicon = require('serve-favicon');
const port = process.env.PORT || 3000;
const path = require('path');

mongoose.connect(process.env.DATABASE_URL)
const cors = require('cors');
app.use(cors()); 
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("successfully opened"))

app.use(favicon(path.join(__dirname, './public', 'favicon.ico')));
app.use(express.json())
app.use("/api/users", userRoute)

app.listen(port, () => {
    console.log(`Server is on port ${port}`);
})

module.exports = app; 

