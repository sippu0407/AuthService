const express=require('express');
const bodyParser=require('body-parser');
const { PORT } = require('./config/serverConfig');
const db=require('./models/index');
const apiRouter=require('./routes/index');

const app=express();
const setupAndRunServer=()=>{

     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));
     
     app.use('/api',apiRouter);
     
     app.listen(PORT,async()=>{
  
        console.log(`server is running on ${PORT}`);
     })
}

setupAndRunServer();