var express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
const saveWords = require('./controllers/SaveWord');
const getWords = require('./controllers/GetWord');


app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())
app.use(bodyParser.json())


const dbURI = 'mongodb+srv://aashish:aashish@cluster0.epdenwt.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then(()=>
        app.listen(3566, function(){
            console.log("Authentication system is running")
        })
    )
    .catch((err)=>console.log(err))

app.post('/saveWord', saveWords)
app.get('/getWords', getWords)