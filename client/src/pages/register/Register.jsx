import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

    const handleClick = async(e) =>{
        e.preventDefault();
        try{
            const res = await axios.post("/auth/register",{
                username,
                email,
                country,
                city,
                phone,
                password
            });
            navigate("/login");
        }catch(err){
            setError((err.response.data.message).slice(7,37));
        }
    }

    return (
        <div className="logContainer">
            <div className="logWrapper">
                <h1 className="title">REGISTER</h1>
                <form>
                    <input 
                        value={username}
                        placeholder="Username"
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <input
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        value={country}
                        type="text" 
                        placeholder="Country"
                        onChange={(e)=>setCountry(e.target.value)}
                    />
                    <input 
                        value={city}
                        type="text" 
                        placeholder="City"
                        onChange={(e)=>setCity(e.target.value)}
                    />
                    <input 
                        value={phone}
                        type="number" 
                        placeholder="Contact No"
                        onChange={(e)=>setPhone(e.target.value)}
                    />
                    <input 
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button
                        className="btn"
                        onClick={handleClick}
                    >
                        REGISTER 
                    </button>
                    {error.length>1 && 
                    <button className="btn-2">
                        <span>{error}</span>, please choose unique username & email and fill all the fields.
                    </button>}
                </form>
            </div>
        </div>
    )
}

export default Register