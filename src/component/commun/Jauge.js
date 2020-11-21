import React from "react";
import "./css/Jauge.css"
function Jauge({icon,number}){
    return (
        <div className={"flex_column centerFlex container_jauge"}>
            {icon}
            <p>{number}</p>
        </div>
    )
}

export default Jauge