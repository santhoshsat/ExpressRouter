const express = require('express');
const social = express()

social.get('/',(req,res)=>{
    res.send(`
    <ol>
        insta: <li>@sandy_sandy02</li>
        facebook: <li>sandy56</li>
        gmail: <li>sandysanthosh95@gmail.com</li>
    </ol>
    `)
})
module.exports=social