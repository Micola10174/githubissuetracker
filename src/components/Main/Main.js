import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchIssues from '../SearchIssues/SearchIssues';
import { getListIssues } from '../../actions/issuesActions';
import Plug from '../HelperComponents/Plug/Plug';
import Loader from '../HelperComponents/Loader/Loader';
import './Main.scss';

class Main extends Component {

    handlePageClick = (currentPage) => {
        const { getListIssues } = this.props;
        const { name, repository } = this.state;

        let page = currentPage;
        let data = { name, repository };

        getListIssues(data, page)
    };

    render() {
        const { issues: { loading, error }, history } = this.props;
        return (
            <div className="container">
                <SearchIssues
                    changeHandler={this.handleInputChange}
                    submitHandler={this.submitHandler}
                    loading={loading}
                    history={history}
                />
                {!loading && !error ?  <h1>Start searching for issues</h1> : null}
                {loading ? <Loader /> : null}
                {error ? <Plug text='User or repository not found' subtext="Please repeat your request" /> : null }
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
    getListIssues
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
