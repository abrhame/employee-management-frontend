import React from "react";

import "../style/input.css";



const Input = ({
    label,name,value,type,onChange}) => {
    return <div className="input-group">
        <label htmlFor={name} className="input-label">{label}</label>
        <input id={name} className="input" type={type} name={name} value={value} onChange={onChange}></input>
    </div>
}

export default Input;