import React from "react";
import "../style/profile.css";
import Header from "../componenets/Header";

const Profile = ()  => {
    const user_data = localStorage.getItem('user')  
    const user = JSON.parse(user_data) 

    return <>
    <Header />
        <div className="profile-page">
        <h2 className="profile-header">Profile</h2>
        <div className="profile-body">
        <h5>Full Name:  {user.name}</h5>
        <h5>Email: {user.email}</h5>
        </div>
        </div>


    </> 
}

export default Profile;