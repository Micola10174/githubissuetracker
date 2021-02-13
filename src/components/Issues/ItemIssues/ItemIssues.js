import React from 'react';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ItemIssues.scss';

const ItemIssues = ({ issue }) => {
    return (
        <NavLink to={`/issues/${issue.number}`} className="item">
            <p className="item__title">{issue.title}</p>
            <p>
                <span>#{issue.number}</span> created <Moment format="DD/MM/YYYY">{issue.created_at}</Moment>
            </p>
        </NavLink>
    )
}

ItemIssues.propTypes = {
    issue: PropTypes.object
}

export default ItemIssues;
