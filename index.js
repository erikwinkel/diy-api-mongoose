const express = require('express')
const db = require('./models')
require('dotenv').config()
const cors = require('cors')

db.connect()
// config app
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(cors())

// controllers
app.use('/blog', require('./controllers/blog'))

// routes
app.get('*', (req,res) => {
    res.status(404).send('Not Found')
})


app.listen(PORT, () => console.log(`express listening on :${PORT}`))
