import React from "react";
import "../style/card.css";

const Card = ({children}) => {
    return <div className="card">
        {children}
    </div>
}

export default Card;