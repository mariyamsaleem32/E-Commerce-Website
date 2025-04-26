
const Login = () => {
    return (
        <div className="signup">
<div className="signup-container">
<h1>Sign Up</h1>
    <div className="signup-fields">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder=" Email Address" />
        <input type="password" placeholder="password" />
    </div>
    <button>Continue</button>
    <p className="login-btn">Already have an account? <span>Login here</span> </p>
</div>
        </div>
    )
}

export default Login;