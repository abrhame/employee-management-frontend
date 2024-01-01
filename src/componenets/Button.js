import React from "react";
import "../style/button.css";

const Button = ({onClick, Children,type}) => {
    return <button type={type} className="cutsom-button" onClick={onClick}>
        {Children}
    </button>
}

export default Button;