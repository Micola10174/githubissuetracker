import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchIssues from '../SearchIssues/SearchIssues';
import { getListIssues, clearListIssues } from '../../actions/issuesActions';
import './Main.scss';

class Main extends Component {
    state = {
        name: '',
        repository: '',
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

        // let page = currentPage.selected + 1;
        let page = currentPage;
        let data = { name, repository };

        getListIssues(data, page)
    };

    render() {
        const { issues: { loading } } = this.props;
        const { name, repository, isShow } = this.state;
        return (
            <div className="container">
                <SearchIssues
                    changeHandler={this.handleInputChange}
                    submitHandler={this.submitHandler}
                    name={name} repository={repository}
                    loading={loading}
                />
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


export default connect(mapStateToProps, mapDispatchToProps)(Main);
