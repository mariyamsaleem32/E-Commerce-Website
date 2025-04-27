
import Product from '../models/product.js';

const AddProduct = async (req, res) => {
  try {
    const product = new Product({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old: req.body.old_price 
      });
      
    console.log(product);
    await product.save();
    console.log("saved");
    res.status(200).json({success:true,name:req.body.name})
    
  }catch(err){
    console.log(err);
    res.status(500).json({success:false,errror:"internal server error"})
  }
  }

  export default AddProduct;