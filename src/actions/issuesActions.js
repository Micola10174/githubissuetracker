import * as types from './constants';

export const getListIssues = (data, page = 1) => {
    return {
        type: types.GET_LIST_ISSUES,
        payload: {
            client: 'default',
            request: {
                url: `/repos/${data.name}/${data.repository}/issues?page=${page}`,
                method: "get"
            }
        }
    };
}

export const getIssues = (data, number) => {
    return {
        type: types.GET_ISSUES,
        payload: {
            client: 'default',
            request: {
                url: `/repos/${data.name}/${data.repository}/issues/${number}`,
                method: "get"
            }
        }
    };
}