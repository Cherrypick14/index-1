const express  = require('express');
const app = express();
const dotenv = require('dotenv');
const  mongoose  = require('mongoose');
dotenv.config();
const PORT = process.env.PORT || 5000;
 const  CONNECTDB = require('./database/connect');
const PostRoute = require('./routers/Post');



//database 
// mongoose.connect(process.env.MONGO_URL ).then(()=>{
//  console.log('database connected');
// }).catch((err)=>{
//   console.log(err);
// })
 CONNECTDB(process.env.MONGO_URL);


 //middlewares 
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));


//route
app.use('/api/post', PostRoute);


//port 
app.listen(PORT,()=>{
  console.log(`server is running at port ${PORT}`);
})