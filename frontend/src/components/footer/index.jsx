import footer_logo from '../../../../admin/src/assets/logo_big.png';
import instagram_icon from '../../../../admin/src/assets/instagram_icon.png';
import pintester_icon from '../../../../admin/src/assets/pintester_icon.png';
import whatsapp_icon from '../../../../admin/src/assets/whatsapp_icon.png';
import './footer.css';
const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="footer logo" />
                <p>SHOPPER</p>
                </div>
                <ul className="footer-links">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">
    <div className="footer-icons-container">
        <img src={instagram_icon} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={pintester_icon} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={whatsapp_icon} alt="" />
    </div>
</div>
<div className="footer-copyright">
    <hr />
    <p>copyright @ 2025 - All Right Reserved.</p>
</div>
        </div>
    )
}

export default Footer;