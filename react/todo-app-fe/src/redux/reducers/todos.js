import * as type from '../types';

const initialState = {
    todos: [],
    loading: false,
    error: null
};

export default function UserTodosReducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case type.USER_TODOS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.USER_TODOS_SUCCESS:
            return{
                ...state,
                loading: false,
                todos: action.payload
            }
        case type.USER_TODOS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case type.CREATE_TODO_REQUESTED:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case type.CREATE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            }
            case type.CREATE_TODO_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default: 
            return state;
    }
}