import React from 'react';
import Loader from '../../components/Loader/Loader';
import './SearchIssues.scss';

const SearchIssues = ({ changeHandler, submitHandler, name, repository, loading }) => {
    return (
        <React.Fragment>
            <form action="" className="search" onSubmit={submitHandler}>
                <div className="search-wrapper">
                    <input className="search-input" type="text" placeholder="Name" name="name" value={name} onChange={changeHandler} required/>
                </div>
                <div className="search-wrapper">
                    <input className="search-input" type="text" placeholder="Repository" name="repository" value={repository} onChange={changeHandler} required/>
                </div>
                <button type="submit" className="submit-btn">Search</button>
            </form>
            {
                loading ? <Loader /> : null
            }
        </React.Fragment>

    )
}

export default SearchIssues;



