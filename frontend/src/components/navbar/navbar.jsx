
import './navbar.css';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../shopcontext/index.jsx';

const Navbar = () => {
const [menu, setMenu] = useState('Shop');
const context = useContext(ShopContext);
const { getTotalCartItems } = useContext(ShopContext);
    return (
 <div className="navbar">

        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </div>
    
        <ul className="nav-menu">
          <li onClick={() => setMenu('shop')}>
          <Link to={'/shop'} style={{textDecoration:'none'}}>Shop</Link> {menu === 'shop' ? <hr /> : null}
          </li>
          <li onClick={() => setMenu('men')}>
          <Link to={'/men'} style={{textDecoration:'none'}}>Men</Link> {menu === 'men' ? <hr /> : null}
          </li>
          <li onClick={() => setMenu('women')}>
           <Link to={'/women'} style={{textDecoration:'none'}}>Women</Link> {menu === 'women' ? <hr /> : null}
          </li>
          <li onClick={() => setMenu('kids')}>
          <Link to={'/kids'} style={{textDecoration:'none'}}>Kids</Link> {menu === 'kids' ? <hr /> : null}
          </li>
        </ul>
  
        <div className="nav-login-cart">
           <Link to={'/login'}><button>Login</button></Link>
            <Link to={'/cart'}><img src={cart_icon} alt="cart-icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}
            </div>
        </div>

    </div>
  );
}

export default Navbar;
