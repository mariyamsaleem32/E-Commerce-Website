import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
    return (
        <div className="signup">
            <div className="signup-container">
                <h1>Sign Up</h1>
                <div className="signup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button className='btn'>Continue</button>

                <p className="login-btn">
                    Already have an account?  
                    <Link to="/login">
                        <span>  Login here</span>
                    </Link>
                </p>

                <div className="login-agree">
                    <input type="checkbox" id="agree" />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
