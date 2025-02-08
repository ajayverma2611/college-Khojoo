import { useState } from "react";
import "../Styles/style.css";
import signInImage from "./sign_in_image.png";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // Handle login logic here
    }

    return (
        <div className="container">
            {/* Left Side - Sign In Form */}
            <div className="sign-in-content">
                <h1>Welcome!</h1>
                <p className="subheading">create a free account</p>

                <form onSubmit={handleSubmit} className="sign-in-form">
                    <label>Email Address</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        // placeholder="Enter your email"
                    />

                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        // placeholder="Enter your password"
                    />

                    <a href="#" className="forgot-password">Forget Password?</a>

                    <button type="submit" className="sign-in-btn">Sign in</button>

                    <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
                </form>
            </div>

            {/* Right Side - Image */}
            <div className="sign-in-image">
                <img src={signInImage} alt="Educational theme" />
            </div>
        </div>
    );
}
