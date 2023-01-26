const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('Hello EDOK');
});

app.get('/users',(req,res)=>{
    res.send('ALL USER NA');
});

app.listen(3000,() =>
console.log('server started'),
);