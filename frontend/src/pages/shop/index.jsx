import Popular from '../popular/index.jsx';
import Hero from '../../components/hero/index.jsx';
import Offers from '../offers/index.jsx';
import Newsletter from '../newsletter/index.jsx'
import Newcollection from '../newCollection/index.jsx';
const Shop = () => {
  return (
    <div className="shop">
    <Hero/>
    <Popular/>
    <Offers/>
    <Newcollection/>
    <Newsletter/>
    </div>

  );
}   

export default Shop;