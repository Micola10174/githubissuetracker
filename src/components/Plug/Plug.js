import React from 'react';
import PropTypes from 'prop-types';
import './Plug.scss';

const Plug = ({ text, subtext }) => {
    return (
        <div className="wrapper-plug">
            <h2>{text}</h2>
            <p>{subtext}</p>
        </div>
    )
}

Plug.defaultProps = {
    text: '',
    subtext: ''
}

Plug.propTypes = {
    text: PropTypes.string,
    subtext: PropTypes.string
}

export default Plug;

