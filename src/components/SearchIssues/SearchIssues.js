import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { getListIssues } from '../../actions/issuesActions';
import PropTypes from 'prop-types';
import './SearchIssues.scss';

const SearchIssues = ({ history }) => {

    const dispatch = useDispatch();

    const submitHandler = (values, { setSubmitting }) => {
        dispatch(getListIssues(values))
            .then(res => {
                if (res.payload && res.payload.status === 200){
                    localStorage.setItem('data', JSON.stringify(values))
                    history.push('/list_issues/1')
                } 
            })
            
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{ name: '', repository: '' }}
            validate={values => {
                const errors = {};

                if (!values.name) errors.name = 'Required';
                if (!values.repository) errors.repository = 'Required';

                return errors;
            }}
            onSubmit={submitHandler}
        >
            { ({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} className="search" >
                    <div className={errors.name && touched.name && errors.name ? "search-wrapper error" : "search-wrapper"}>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                            className="search-input"
                        />
                    </div>
                    <div className={errors.repository && touched.repository && errors.repository ? "search-wrapper error" : "search-wrapper"} >
                        <input
                            type="text"
                            name="repository"
                            onChange={handleChange}
                            value={values.repository}
                            className="search-input"
                        />
                    </div>
                    <button type="submit" disabled={ isSubmitting } className="submit-btn" >
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    )
}

SearchIssues.propTypes = {
    history: PropTypes.object.isRequired
}


export default SearchIssues;
