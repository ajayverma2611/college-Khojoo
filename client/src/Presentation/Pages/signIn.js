import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/style.css";
import signInImage from "../Assests/SignIn-signUp/sign_in_image.png";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/auth/login", {
                email,
                password
            }, { withCredentials: true });

            localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user info
            navigate("/home"); // Redirect after login
        } catch (err) {
            setError(err.response?.data?.message || "Invalid email or password");
        }
    }


    return (
        <div className="container">
            {/* Left Side - Sign In Form */}
            <div className="sign-in-content">
                <h1>Welcome!</h1>
                <div className="div-para">
                <p className="subheading">create a free account</p>
                </div>

                {error && <p className="error">{error}</p>}

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

                    <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
                </form>
            </div>

            {/* Right Side - Image */}
            <div className="sign-in-image">
                <img src={signInImage} alt="Educational theme" />
            </div>
        </div>
    );
}
