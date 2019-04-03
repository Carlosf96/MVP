//find and use technologies we will use.
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
//bodyparse middleware
app.use(bodyParser.urlencoded({
    extended: false
})); //parse the url

app.use(bodyParser.json());//parse to jason

const db = require("/home/hc-19/Carlosf96/MVP/config/keys.js").mongoURI;//require config for DB

mongoose
    .connect(
        db, {
            useNewUrlParser: true
        })
    .catch(err => console.log(err))
    .then(() => console.log("MongoDB connected successfully!"))

const port = 1337
//const port = process.env.PORT || 5000; process.env.port is Heroku's port if you choose to deploy the app there
    

app.listen(port, () => {//let server listen on defined port
    console.log(`App listening on ${port}!`);
});