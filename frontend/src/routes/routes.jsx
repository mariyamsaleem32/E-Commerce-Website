import { Route,Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Shop from "../pages/shop/index.jsx";
import Category from '../pages/category/index.jsx';
import Product from '../pages/product/index.jsx';
import Cart from "../pages/cart/index.jsx";
import Login from '../components/login/index.jsx';
import Signup from '../components/signup/index.jsx';
import Footer from "../components/footer/index.jsx";
import men_banner from '../../../admin/src/assets/banner_mens.png';
import women_banner from '../../../admin/src/assets/banner_women.png';
import kid_banner from '../../../admin/src/assets/banner_kids.png';

const Routing = () => {
    return(
        <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Shop/>} />
    <Route path="/men" element={<Category category="men" banner={men_banner} />} />
    <Route path="/women" element={<Category category="women" banner={women_banner} />} />
    <Route path="/kids" element={<Category category="kid" banner={kid_banner} />} />
    <Route path="/product" element={<Product />} />
    <Route path="/product/:ProductId" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="*" element={<Shop/>} />
    </Routes>
    <Footer/>
        </>
    )
}

export default Routing