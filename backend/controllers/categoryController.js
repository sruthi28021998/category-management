const Category=require('../models/Category');
exports.getAllCategories=async(requestAnimationFrame,res)=>{
    try{
        const categories=await Category.find();
        res.json(categories);
    }catch(error){
        console.error('Error fetching categories:',error);
        res.status(500).json({message:'Failed to fetch categories'});
    }
};

exports.createCategory=async(req,res)=>{this.createCategory};
exports.updateCategory=async(req,res)=>{this.updateCategory};
exports.deleteCategory=async(req,res)=>{this.deleteCategory};