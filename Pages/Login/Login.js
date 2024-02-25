import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'; // Import the CSS file

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Placeholder logic, replace with actual login logic
        if (email && password) {
            // Successful login, redirect to home
            navigate('/');
        } else {
            // Display an error message or handle login failure
            alert("Please fill in all the fields");
        }
    };

    return (
        <div className='maincontainerForLogin'>
            <div className='submainContainer'>
                <div style={{ flex: 1, marginLeft: 150, marginBottom: 50 }}>
                    <p className='logoText'>Socio-Connect</p>
                    <p className='introText'>Connect with Strange Peoples</p>
                </div>
                <div  class="loginContainer" style={{ flex: 3 }}>
                    <p style={{alignItems:"center"}} className='loginTxt'>Login</p>
                    <input
                        type="email"
                        placeholder='Email'
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
                    <button className='btnForLogin' onClick={handleLogin}>Login</button>
                    <Link to={"/register"}>
                        <p style={{ textAlign: 'start', marginLeft: "30.6%", fontSize:30 }}>Create New Account</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
