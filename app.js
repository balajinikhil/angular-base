const path = require('path')
const express = require('express');
const morgan = require('morgan');

const viewRouter = require('./routes/viewRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));

app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(morgan('dev'))

app.use('/', viewRouter)

app.use((err,req,res,next)=>{

    res.status(400).json({
        status:"error",
        err
    })
})

module.exports = app