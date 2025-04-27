import './category.css';
import { useContext } from 'react';
import { ShopContext} from '../../components/shopcontext/index.jsx';
import dropdown_icon from '../../../../admin/src/assets/dropdown_icon.png';
import Item from '../item/index.jsx';

const Category = (props) => {    
    console.log("Category prop:", props.category);
const {all_product} = useContext(ShopContext);
console.log("All products in context:", all_product);

return (
 <div className="category">
       <img className='shopcategory-banner' src={props.banner} alt="" />
  <div className="shopcategory-index">
        <p> <span>Showing 1-12</span>out of 36 products</p>
    <div className="shopcategory-sort">
        sort by <img src={dropdown_icon} alt="" />
    </div>
  </div>
    <div className="shopcategory-products">
        {all_product.map((item,i) => {
            if (props.category===item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }else{
                return null;
            }
        })}
        
    </div>
    <div className="shopcategory-loadmore">
        Explore More
    </div>
 </div>
    )
}

export default Category;