import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIssues, clearIssues } from '../../../../actions/issuesActions';
import Loader from '../../../Loader/Loader';
import './Issues.scss';

class Issues extends Component {
    componentDidMount() {
        const { getIssues, match: { params } } = this.props;
        let data = JSON.parse(localStorage.getItem('data'));
        getIssues(data, params.id)
    }


    componentWillUnmount() {
        const { clearIssues } = this.props;
        clearIssues();
    }
    



    render() {
        const { issues: { issues }, history } = this.props;
        if (Object.keys(issues).length === 0) {
            return <Loader />
        }
        return (
            <div className="container">
                <div className="button back">
                    <svg width="60" height="40" onClick={() => history.goBack()}>
                        <path stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none" d="M18,20 l8,-8 M18,20 h22 M18,20 l8,8" />
                    </svg>
                </div>
                <h1 className="title">{issues.title} <span>#{issues.number}</span></h1>
                <p>Opened this issue <span>{issues.user.login}</span></p>
                <div className="issue_body">{issues.body}</div>
            </div>
        )
    }
}

const mapStateToProps = ({ issues }) => {
    return {
        issues
    }
}

const mapDispatchToProps = {
    getIssues,
    clearIssues
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
