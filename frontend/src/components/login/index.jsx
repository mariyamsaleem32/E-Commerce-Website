import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    return (
        <div className="signup">
            <div className="signup-container">
                <h1>Login</h1>
                <div className="signup-fields">
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button className='btn'>Continue</button>
                <p className="login-btn">
                    Don't have an account?  
                    <Link to="/signup">
                        <span>  Signup here</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
