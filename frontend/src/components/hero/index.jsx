import './hero.css';
import hand_icon from '../../../../admin/src/assets/hand_icon.png';
import arrow_icon from '../../../../admin/src/assets/arrow.png';
import hero_image from '../../../../admin/src/assets/hero_image.png';

const Hero = () => {
  return (
<div className="hero">
  <div className="hero-left">
     <h2>NEW ARRIVALS ONLY</h2>

     <div>
        <div className="hero-hand-icon">
            <p>NEW</p>
            <img src={hand_icon} alt="" />
        </div>
         <p>collection</p>
         <p>for everyone</p>
      </div>

     <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={arrow_icon} alt="" />
     </div>

  </div>

    <div className="hero-right">
        <img src={hero_image} alt="" />
    </div>
</div>
  );
}

export default Hero;