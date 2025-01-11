import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        mobile: "",
        password: "",
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const Change = () => {
        navigate("/OTP");
        generateOtp();
    };

    const generateOtp = () => {
        let digits = '0123456789';
        let otplength = 4;
        let otp = "";

        for (let i = 0; i < otplength; i++) {
            let index = Math.floor(Math.random() * digits.length);
            otp += digits[index];
        }
        alert(otp);
    };
    
    const login = () => {
      
    };

    return (
        <div className="normal">
            <div className="nill">
                <img src="https://accounts.practo.com/static/images/illustration.png" />
                <div className="login">
                    {/* {console.log("user", user)} */}
                    <p>Mobile Number</p>
                    <input type="text" name="mobile" value={user.mobile} placeholder="Enter your Mobile Number" onChange={handleChange} />
                    <p>Password</p>
                    <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange} />
                    <div className="checking">
                        <input type="checkbox" className="checkbox1" /><label className="label">Remember me for 30 days</label>
                        <p onClick={Change}>forgot password ?</p>
                    </div>
                    <div className="checking">
                        <input type="checkbox" className="checkbox1" /><label className="label">Agree</label>
                    </div>
                    <div className="button" onClick={login}>Login</div>
                </div>
            </div>
        </div>
    );
};

export default Login;
