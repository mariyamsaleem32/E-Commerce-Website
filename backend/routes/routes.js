import { Router } from "express";
import upload from "../storage/upload.js";
import {ENV} from '../constant/index.js';
import {AddProduct,RemoveProduct} from '../controllers/productController.js';

const route = Router();

route.post('/upload', upload.single('product'), (req, res) => {
  const imageUrl = `http://localhost:${ENV.PORT}/images/${req.file.filename}`;
  res.status(200).json({ success: 1, image_url: imageUrl });
});

route.post('/product',AddProduct);
route.delete('/remove/product',RemoveProduct);

export default route;
