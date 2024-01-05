import React from "react";
import { useNavigate } from "react-router";
import insaImage from "../assets/insa.webp"
import "../style/header.css"
import { FaRegCircleUser } from "react-icons/fa6";


const Header = () => {
    const navigate = useNavigate();
    const user_data = localStorage.getItem('user')  
    const user = JSON.parse(user_data) 

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
               <FaRegCircleUser className="profile-icon" />    
                <p className="profile">{user.name}</p>
                <p className="drop-down" onClick={handleLogout}><i class="fas fa-sign-out-alt"></i></p>
                
            </div>
        </header>
    )
}

export default Header;