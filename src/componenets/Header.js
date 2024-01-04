import React from "react";
import { useNavigate } from "react-router";
import insaImage from "../assets/insa.webp"
import "../style/header.css"

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        const userConfirmed = window.confirm('Are you sure you want to logout?')

        if (userConfirmed) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        navigate('/login');
        }else{
            // do nothing
        }
        
    }

    const handleNavigate = () => {
        navigate('/profile')
    }

    const handleHomeNavigate = () => {
        navigate('/home')
    }
    return (
        <header className="header">
            <div onClick={handleHomeNavigate} className="left-header">
            <img className="header-image" src={insaImage} alt="Insa" />
            <h3>INSA EMPLOYEE MANAGEMENT</h3>
            </div>
            <div className="right-header">
                <p className="profile" onClick={handleNavigate}>Profile</p>
                <p className="logout" onClick={handleLogout}>Logout</p>
            </div>
        </header>
    )
}

export default Header;