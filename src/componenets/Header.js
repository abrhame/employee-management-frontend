import React from "react";
import insaImage from "../assets/insa.webp"
import "../style/header.css"

const Header = () => {
    return (
        <header className="header">
            <img className="header-image" src={insaImage} alt="Insa" />
        </header>
    )
}

export default Header;