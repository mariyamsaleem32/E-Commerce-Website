import './newsletter.css';

const Newslatter = () => {
    return(
        <div className="newslatter">
<h1>Get Exclussive Offer On Your Email</h1>
<p>Subscribe to our newsletter and stay updated</p>
<div>
    <input type="email" placeholder='your email id'/>
    <button>Subscribe</button>
</div>
        </div>
    )
}

export default Newslatter;