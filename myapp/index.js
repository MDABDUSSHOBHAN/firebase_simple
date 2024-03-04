const express = require('express');
const cors = require('cors');
const phone = require('./phone.json');


const app =  express();
const port = 5000;
app.use(cors());
app.get('/',(req,res)=> {
    res.send('My Phone Information Coming Soon...');
})
app.get('/data',(req,res)=>{
    res.send('More Data coming Soom...');
})

app.get('/phone',(req,res)=>{
    res.send(phone);
})

app.get('/phones/:id',(req,res)=>{


    const id = parseInt(req.params.id);
    console.log("I need data for id:",id);
    const phones = phone.find(phones=> phones.id === id) || {};
    res.send(phones);
})


app.listen(port,()=> {
    console.log(`My First seresr is running on porst : ${port}`);
})
