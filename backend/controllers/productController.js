import Product from '../models/product.js';

//add products 
const AddProduct = async (req, res) => {
  try {
    const products = await Product.find();
    let id;
    if (products.length > 0) {
      const last_product = products[products.length - 1];
      id = last_product.id + 1; 
    } else {
      id = 1; 
    }

    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old: req.body.old_price 
    });

 
    console.log(product);
    await product.save();
    console.log("saved");

    res.status(200).json({ success: true, name: req.body.name });

  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "internal server error" });
  }
};

//remove products 
const RemoveProduct = async (req, res) => {
    try {
      await Product.findOneAndDelete({
        id: req.body.id
      })
      console.log("removed");
      res.status(200).json({ success: true, name: req.body.name });
  
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, error: "internal server error" });
    }
  };

export {AddProduct,RemoveProduct};
