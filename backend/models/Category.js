const mongoose=require('mongoose');
const CategorySchema=new mongoose.Schema({
    name:{type:String, required:true,unique:true},
    description:String,
    imageUrl:'https://images.app.goo.gl/VayYZRDKENmxxjKr7.jpg',
}, {timestamps:true});
module.exports=mongoose.model('Category,CategorySchema');