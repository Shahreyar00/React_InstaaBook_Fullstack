import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./login.css";

const Login = () => {
    const [loginData, setLoginData] = useState({
        username:undefined,
        password:undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        setLoginData((prev)=>({...prev, [e.target.id]:e.target.value}));
    }

    const navigate = useNavigate();

    const handleClick = async(event) =>{
        event.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try{
            const res = await axios.post("/auth/login",loginData);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/");
        }catch(err){
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    }

    return (
        <div className="logContainer">
            <div className="logWrapper">
                <h1 className="title">SIGN IN</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        onChange={handleChange}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={handleChange}
                    />
                    <button
                        disabled={loading}
                        className="btn"
                        onClick={handleClick}
                    >
                        LOGIN 
                    </button>
                    {error && (
                        <span className="err">Wrong Credentials! Please try again</span>
                    )}
                    <span className="forPass">DO NOT REMEMBER YOUR PASSWORD!</span>
                    <Link to="/register">
                        <span className="forReg">Not Registered! CREATE A NEW ACCOUNT</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login