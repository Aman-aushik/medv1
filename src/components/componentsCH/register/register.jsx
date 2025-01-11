import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        mobile: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const register = () => {
    
    };

    return (
        <div>
            <div className="total">
                <img src="https://accounts.practo.com/static/images/illustration.png" alt="Illustration" />
                <div className="register">
                    <div className="Heading">
                        <h4>Join Practo</h4>
                        <p>Are you a doctor? <Link to="#" className="smalla">Register Here</Link></p>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <p>Full name</p>
                    <input type="text" name="name" value={user.name} placeholder="Full Name" onChange={handleChange} />
                    <p>Mobile Number</p>
                    <input type="text" name="mobile" value={user.mobile} placeholder="Mobile Number" onChange={handleChange} />
                    <p>Create Password</p>
                    <input type="password" name="password" value={user.password} placeholder="Create password" onChange={handleChange} />
                    <div className="strength"></div>
                    <div className="check">
                        <input className="checkbox" type="checkbox" />
                        <label>Receive relevant offers and promotional communication from Practo</label>
                    </div>
                    <p className="smallp">By signing up, I agree to <Link to="#" className="smalla">terms</Link></p>
                    <div className="button" onClick={register}>Register</div>
                </div>
            </div>
        </div>
    );
};

export default Register;
