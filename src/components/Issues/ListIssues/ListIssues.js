import React, { Component, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListIssues } from '../../../actions/issuesActions';
import PropTypes from 'prop-types';
import ItemIssues from '../ItemIssues/ItemIssues';
import Plug from '../../Plug/Plug';
import Loader from '../../Loader/Loader';
import Pagination from '../../Pagination/Pagination';
import './ListIssues.scss';



const ListIssues = ({history, match}) => {

    const issues = useSelector(state => state.issues);
    const dispatch = useDispatch()

    let [loading, setLoading] = useState(false)
    let [isAnchor, setIsAnchor] = useState(false)
    const data = JSON.parse(localStorage.getItem('data'))

    useEffect(() => {
        const { params: { page } } = match;
        setLoading(true)
        dispatch(getListIssues(data, page)).then(res => setLoading(false))
    }, [])

    const handlePageClick = page => {
        setLoading(true)
        setIsAnchor(false)
        history.push(`/list_issues/${page}`)
        dispatch(getListIssues(data, page)).then(res => setLoading(false))
    }

    const scrollHandler = () => {
        let anchor = isAnchor ? '.header' : '.pagination';
        document.querySelector(anchor).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        setIsAnchor(!isAnchor)
    }

    if (loading) {
        return <Loader />
    }
    
    return (
        <div className="wrapper-list__issues">
            <div className="container">
                {
                    issues.list_issues.length ? issues.list_issues.map((issue, index) => <ItemIssues issue={issue} key={index} />) : <Plug text="No issue lists found" />
                }
                <Pagination
                    currentPage={issues.currentPage}
                    countPage={issues.count_page}
                    handlePageClick={handlePageClick}
                    show={!Boolean(issues.count_page > 1 && !issues.list_issues.length)}
                />
            </div>
            <button className="btn-float" onClick={scrollHandler}></button>
        </div>
    )
}

ListIssues.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
}


export default ListIssues
