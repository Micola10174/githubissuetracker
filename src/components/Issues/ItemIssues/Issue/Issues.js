import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import { getIssues } from '../../../../actions/issuesActions';
import Loader from '../../../HelperComponents/Loader/Loader';
import './Issues.scss';

const Issues = ({history, match}) => {

    const state = useSelector(state => state.issues);
    const dispatch = useDispatch();

    useEffect(() => {
        const { params } = match;
        let data = JSON.parse(localStorage.getItem('data'));
        dispatch(getIssues(data, params.id));
    }, [])

    if(Object.keys(state.issues).length === 0 || state.loading){
        return <Loader />
    }
    return (
        <div>
            <div className="container">
                <div className="button back">
                    <svg width="60" height="40" onClick={() => history.goBack()}>
                        <path stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none" d="M18,20 l8,-8 M18,20 h22 M18,20 l8,8" />
                    </svg>
                </div>
                <h1 className="title">{state.issues.title} <span>#{state.issues.number}</span></h1>
                <p>Opened this issue <span>{state.issues.user.login}</span></p>
                <div className="issue_body">{state.issues.body}</div>
            </div>
        </div>
    )
}

Issues.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
}

export default Issues;

