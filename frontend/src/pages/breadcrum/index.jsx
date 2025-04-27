import './breadcrum.css';
import arrow_icon from '../../../../admin/src/assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum">
    Home <img src={arrow_icon} alt="" />
    Shop <img src={arrow_icon} alt="" />
    {product.category} <img src={arrow_icon} alt="" />
    {product.name} <img src={arrow_icon} alt="" />
    </div>
  );
}

export default Breadcrum;