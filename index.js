const express = require('express');
const service = require('./services')
const About = require('./About');
const social = require('./social');
const book = require('./books');
const user = require('./user')
const app = express()

app.get('/',(req,res)=>{
    res.send('This is home page')
})

app.use('/service',service)
app.use('/about',About)
app.use('/social',social)
app.use('/book',book)
app.use('/user',user)

app.listen(5000)