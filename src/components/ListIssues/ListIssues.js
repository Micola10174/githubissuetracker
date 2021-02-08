import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemIssues from '../ItemIssues/ItemIssues';
import './ListIssues.css';


const ListIssues = ({list_issues}) => {
    return (
        <div>
            {
                list_issues.map((issue, index) => <ItemIssues issue={issue} key={index} />)
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