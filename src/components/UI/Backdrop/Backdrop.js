import React from 'react';
import './Backdrop.css';
import PropTypes from 'prop-types';
const backdrop = (props) => (
    props.show ? <div className="backdrop" onClick={props.clicked}></div> : null
);

export default backdrop;

backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    clicked: PropTypes.func.isRequired
}