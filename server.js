const mongoose = require('mongoose');

const DB = 'mongodb://localhost:27017/test'
mongoose.connect(DB,  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(()=>{
      console.log(`DB connected`);
  }).catch(err=>{
      console.log(`DB connection error`,err);
  })

const app = require('./app');
app.listen(4100, ()=>{
      console.log(`server running 4100`);
  })