import {combineReducers} from 'redux';
import UserReducer from './users';
import UserTodosReducer from './todos';

 const rootReducers = combineReducers({
    user: UserReducer,
    todos: UserTodosReducer,
 });

 export default rootReducers;