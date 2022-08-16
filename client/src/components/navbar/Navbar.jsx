import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./navbar.css";

const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
    }
    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/">
                    <span className="logo">InstaaBoook</span>
                </Link>
                <div className="navItems">
                    {user ? (
                        <>
                            <span className="navName">{user.username}</span>
                            <button
                                className="navButton"
                                onClick={handleClick}
                            >
                                Logout 
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/register">
                                <button className="navButton">Register</button>
                            </Link>
                            <Link to="/login">
                                <button className="navButton">Sign in</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar