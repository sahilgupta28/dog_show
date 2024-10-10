import React from "react";

const Button = ({ text, className, onClickEvent }) => {

    return <button className={className} onClick={onClickEvent}>{text}</button>;
}

export default Button;