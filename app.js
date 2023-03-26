const express = require('express');
const mongoose = require('mongoose');


const app = express ();

app.get('/', (req, res) => {
    res.send(`Yayyy! It's working`);
});


// creatting server

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server Has Started`);
});