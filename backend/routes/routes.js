import { Router } from "express";
import upload from "../storage/upload.js";
import {ENV} from '../constant/index.js'
const route = Router();

route.post('/upload', upload.single('product'), (req, res) => {
  const imageUrl = `http://localhost:${ENV.PORT}/images/${req.file.filename}`;
  res.status(200).json({ success: 1, image_url: imageUrl });
});

export default route;
