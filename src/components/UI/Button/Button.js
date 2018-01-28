import React from 'react';
import './Button.css';
const button = (props) => (

    <button className="btn" {...props}>{props.children}</button>
);

export default button;