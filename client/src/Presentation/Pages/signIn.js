import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/style.css";
import {useDispatch} from "react-redux";
import {setUserData, setUserId} from "../../Application/StateManagement/slices/UserSlice";
import Loading from "./Loading";


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("https://khojo-college-server.vercel.app/auth/login", {
                email,
                password
            }, {headers:{"Content-Type": "application/json"}, withCredentials: true });
            console.log(response);
            if(response.status === 200){
                const respo = await axios.get("https://khojo-college-server.vercel.app/auth/profile",{withCredentials: true});
                console.log(respo);
                dispatch(setUserData(respo.data.data));
                dispatch(setUserId(respo.data.data._id));
            }
            // dispatch(setUserData(respo.data.user));
            setLoading(false);
            navigate("/home"); // Redirect after login
        } catch (err) {
            setError(err.response?.data?.message || "Invalid email or password");
            setLoading(false);
        }
    }


    return (
        <>
            {loading && <Loading/>}
            <div className="container">
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
        </>
    );
}
