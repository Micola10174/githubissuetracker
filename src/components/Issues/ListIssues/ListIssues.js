import React, { Component, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemIssues from '../ItemIssues/ItemIssues';
import Plug from '../../Plug/Plug';
import { getListIssues } from '../../../actions/issuesActions';
import Loader from '../../Loader/Loader';
import Pagination from '../../Pagination/Pagination';
import './ListIssues.scss';



const ListIssues = () => {

    const issues = useSelector(state => state.issues);
    const dispatch = useDispatch()

    let [loading, setLoading] = useState(false)
    let [isAnchor, setIsAnchor] = useState(false)
    const data = JSON.parse(localStorage.getItem('data'))

    useEffect(() => {
        setLoading(true)
        dispatch(getListIssues(data)).then(res => setLoading(false))
    }, [])

    const handlePageClick = page => {
        setLoading(true)
        setIsAnchor(false)
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
                    issues.list_issues.length ? issues.list_issues.map((issue, index) => <ItemIssues issue={issue} key={index} />) : <Plug text="No issues" />
                }
                <Pagination
                    currentPage={issues.currentPage}
                    countPage={issues.count_page}
                    handlePageClick={handlePageClick}
                    show={issues.count_page > 1}
                />
            </div>
            <button className="btn-float" onClick={scrollHandler}></button>
        </div>



    )
}

export default ListIssues
