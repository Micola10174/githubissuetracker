import React from 'react';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';

import './ItemIssues.scss';

const ItemIssues = ({ issue }) => {
    return (
        <NavLink to={`/issues/${issue.number}`} className="item">
            <p>{issue.title}</p>
            <p>
                <span>#{issue.number}</span> created <Moment format="DD/MM/YYYY">{issue.created_at}</Moment>
            </p>
        </NavLink>
    )
}

export default ItemIssues;
