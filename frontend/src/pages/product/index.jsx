import { useContext } from "react";
import { ShopContext } from "../../components/shopcontext/index.jsx";
import { useParams } from "react-router-dom";
import Breadcrum from "../breadcrum/index.jsx";
import ProductDisplay from "../productdisplay/index.jsx";
import DiscriptionBox from "../discriptionbox/index.jsx";
import RelatedProducts from "../relatedproducts/index.jsx";
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {ProductId} = useParams();
  const product = all_product.find((item) => item.id === parseInt(ProductId));
  
  return (
    <div className="product-page"> 
     <Breadcrum product={product} />
     <ProductDisplay product={product} />
     <DiscriptionBox/>
     <RelatedProducts/>
    </div>
  );
}

export default Product;