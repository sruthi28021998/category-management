const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const categoryRoutes=require('./routes/categories');
require('dotenv').config();

const app=express();
const port=process.env.PORT||5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.err('MongoDB connection error:',err));

app.use('/api',categoryRoutes);
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});