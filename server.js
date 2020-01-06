const mongoURL = require('./server/config/db').mongoURL
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



//import Routers here
const usersRouter = require('./server/api/users/usersRouter');
const profilesRouter = require('./server/api/profiles/profileRouter');
const singinRouter = require('./server/api/signin/singinRouter');

//connect mongodb
mongoose.Promise = Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongodb connected successfuly!!"))
    .catch((err) => console.log(`Error while DB connect ${err}`))


const port = process.env.port || 5000;

app.get('/', (req, res) => res.status(200).json({ success: 1, message: "Welcome to server for REACT APP!!" }))


//Use Routes
app.use('/api/users', usersRouter);
app.use('/api/profiles', profilesRouter);
app.use('/api/singin', singinRouter);



app.listen(port, () => console.log(`Server running on port ${port}`));
