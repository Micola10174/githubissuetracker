import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';
import IssuesReducer from './reducerListIssues';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    issues: IssuesReducer,
    
});

export default rootReducer;