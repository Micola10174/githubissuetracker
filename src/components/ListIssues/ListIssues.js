import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemIssues from '../ItemIssues/ItemIssues';
import Plug from '../Plug/Plug';
import './ListIssues.css';


const ListIssues = ({ list_issues, isSearch }) => {
    console.log(isSearch);
    return (
        <div>
            {
                list_issues.length ? list_issues.map((issue, index) => <ItemIssues issue={issue} key={index} />) : isSearch ? <Plug text="No issues" /> : null
            }
        </div>
    )
}

export default ListIssues



// {
//     !list_issues.length ?
//         <Plug text="Извините в этом репозиторию нету issues" />
//         : list_issues.map((issue, index) => <ItemIssues issue={issue} key={index} />)
// }