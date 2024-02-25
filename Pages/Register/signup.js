import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Corrected import

import "./signup.css";

export default function Signup() { // Corrected function name
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        // Placeholder logic, replace with actual signup logic
        if (username && phoneNumber && email && password) {
            // Successful signup, redirect to login
            navigate('/login');
        } else {
            // Display an error message or handle signup failure
            alert("Please fill in all the fields");
        }
    };

    return (
        <div className='maincontainerForsignup'>
            <div className='submainConatainer'>
                <div style={{ flex: 1, marginLeft: 150, marginBottom: 50 }}>
                    <p className='logoText'>Socio-Connect</p>
                    <p className='introtext'>Connect with Strange Peoples</p>
                </div>
                <div style={{ flex: 3 }}>
                    <p className='createaccountTxt'>Create New Account</p>
                    <input
                        type="text"
                        placeholder='Username'
                        className='inputText'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Phonenumber'
                        className='inputText'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder='email'
                        className='inputText'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='**********'
                        className='inputText'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='btnforsignup' onClick={handleSignup}>Signup</button>
                    <Link to={"/login"}>
                        <p style={{ textAlign: 'start', marginLeft: "30.6%", fontSize:30 }}>Already have an Account</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
