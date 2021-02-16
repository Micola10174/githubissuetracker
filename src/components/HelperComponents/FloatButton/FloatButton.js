import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrow from '../../../assets/images/arrow_up.png';
import './FloatButton.scss';

const FloatButton = ({ selector }) => {
    const [isAnchor, setIsAnchor] = useState(false);

    const scrollHandler = () => {
        let anchor = isAnchor ? '.header' : selector;
        document.querySelector(anchor).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        setIsAnchor(!isAnchor)
    }

    return (
        <button className="btn-float" onClick={scrollHandler}>
            <img src={arrow} className={isAnchor ? 'active' : ''} />
        </button>
    )
}

FloatButton.propTypes = {
    selector: PropTypes.string.isRequired
}

export default FloatButton;
