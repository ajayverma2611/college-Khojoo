import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/style.css";
import {useSelector,useDispatch} from "react-redux";
import {setUserData, setUserId} from "../../Application/StateManagement/slices/UserSlice";


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/auth/login", {
                email,
                password
            }, {headers:{"Content-Type": "application/json"}, withCredentials: true });
            console.log(response);
            if(response.status === 200){
                const respo = await axios.get("http://localhost:8000/auth/profile",{withCredentials: true});
                console.log(respo);
                dispatch(setUserData(respo.data.data));
                dispatch(setUserId(respo.data.data._id));
            }
            // dispatch(setUserData(respo.data.user));
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

                {error && <p style={{color:"red" , fontWeight:600}}>{error} !</p>}

                <form onSubmit={handleSubmit} className="sign-in-form">
                    <label>Email Address</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        // placeholder="Enter your email"
                        required
                    />

                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                        // placeholder="Enter your password"
                    />

                    <a href="/forgetpassword" className="forgot-password">Forget Password?</a>

                    <button type="submit" className="sign-in-btn">Sign in</button>

                    <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
                </form>
            </div>

            {/* Right Side - Image */}
            <div className="sign-in-image">
                <img src="https://res.cloudinary.com/duyuxtpau/image/upload/v1739688085/eyvitigtz2x8nphsj6i6.webp" alt="Educational theme" />
            </div>
        </div>
    );
}
