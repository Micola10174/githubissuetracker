import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchIssues from '../SearchIssues/SearchIssues';
import { getListIssues, clearListIssues } from '../../actions/issuesActions';
import Plug from '../Plug/Plug';
import ReactPaginate from 'react-paginate';
import './MainPage.css';
import ListIssues from '../ListIssues/ListIssues';

class MainPage extends Component {
    state = {
        name: '',
        repository: '',
        isShow: false
    }

    componentDidMount() {
        if (localStorage.data) {
            let data = JSON.parse(localStorage.getItem('data'));
            this.setState({ name: data.name, repository: data.repository })
        }
    }


    submitHandler = e => {
        e.preventDefault();
        const { name, repository } = this.state;
        const { getListIssues, clearListIssues } = this.props;
        let data = { name, repository };

        localStorage.setItem('data', JSON.stringify(data));
        this.setState({ loading: true, isShow: true })
        clearListIssues();
        getListIssues(data);
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }



    handlePageClick = (currentPage) => {
        const { getListIssues } = this.props;
        const { name, repository } = this.state;

        let page = currentPage.selected + 1;
        let data = { name, repository };

        getListIssues(data, page)
    };

    render() {
        const { issues: { list_issues, count_page, currentPage, isSearch, loading, error } } = this.props;
        const { name, repository, isShow } = this.state;
        return (
            <div className="container">
                <SearchIssues
                    changeHandler={this.handleInputChange}
                    submitHandler={this.submitHandler}
                    name={name} repository={repository}
                    loading={loading}
                />

                {!isShow && !list_issues.length ? <Plug text="Start your search issues" /> : null}
                {error && !list_issues.length ? <Plug text="There is no such user or repository" /> : null }

                <ListIssues list_issues={list_issues} isSearch={isSearch} />
                {
                    list_issues.length ? <ReactPaginate
                        breakClassName={'break-me'}
                        onPageChange={this.handlePageClick}
                        pageCount={count_page}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        initialPage={currentPage - 1}
                    /> : null
                }

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
    getListIssues,
    clearListIssues
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
