//find and use technologies we will use.
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('/home/hc-19/Carlosf96/MVP/routes/api/users.js');
const app = express();
//bodyparse middleware
app.use(bodyParser.urlencoded({
    extended: false
})); //parse the url

app.use(bodyParser.json());//parse to jason

const db = require("/home/hc-19/Carlosf96/MVP/config/keys").mongoURI;//require config for DB

mongoose//our connection to mongoDB
    .connect(
        db, {
            useNewUrlParser: true
        })
    .catch(err => console.log(err))
    .then(() => console.log("MongoDB connected successfully!"))
//passport middleware
app.use(passport.initialize());
//passport configs
require('/home/hc-19/Carlosf96/MVP/config/passport')(passport);
//routes
app.use('/api/users', users)

const port = 1337
//const port = process.env.PORT || 5000; process.env.port is Heroku's port if you choose to deploy the app there
    

app.listen(port, () => {//let server listen on defined port
    console.log(`App listening on ${port}!`);
});