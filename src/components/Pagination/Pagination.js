import React from 'react';
import PropTypes from 'prop-types';
import PaginationResponsive from 'react-responsive-pagination';


const Pagination = ({ show, currentPage, countPage, handlePageClick}) => {
    if (!show) {
        return null
    }
    return (
        <PaginationResponsive
            current={currentPage}
            total={countPage}
            onPageChange={handlePageClick}
            // maxWidth={1140}
        />
    )
}

Pagination.defaultProps = {
    show: true
}

Pagination.propTypes = {
    show: PropTypes.bool,
    currentPage: PropTypes.number,
    countPage: PropTypes.number,
    handlePageClick: PropTypes.func
}

export default Pagination;
