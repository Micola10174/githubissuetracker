import * as types from '../actions/constants';

const INITIAL_STATE = {
    count_page: 1,
    currentPage: 1,
    list_issues: [],
    issues: {},
    isSearch: false,
    loading: false,
    error: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_LIST_ISSUES:
            return { ...state, currentPage: Number(action.payload.request.url.match(/page=([0-9]+)/)[1]), loading: true, error: false }
        case types.GET_LIST_ISSUES_SUCCESS:
            let pageCount;
            try {
                pageCount = action.payload.headers.link ? Number(action.payload.headers.link.match(/page=([0-9]+)>; rel="last"/)[1]) : 1
            } catch (e) {
                pageCount = state.count_page;
            }
            return { ...state, list_issues: action.payload.data, count_page: pageCount, isSearch: true, loading: false };
        case types.GET_LIST_ISSUES_FAIL:
            return { ...state, error: true, loading: false };
        case types.GET_ISSUES:
            return { ...state, loading: true }
        case types.GET_ISSUES_SUCCESS:
            return { ...state, issues: action.payload.data, loading: false };
        case types.GET_ISSUES_FAIL:
            return { ...state, error: true, loading: false };
        default:
            return state;
    }
}