import * as type from '../types';

const initialState = {
    user: {},
    loading: false,
    error: null
};

export default function UserReducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case type.REG_USER_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.REG_USER_SUCCESS:
            
            return{
                ...state,
                loading: false,
                user: action.payload
            }
        case type.REG_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case type.LOG_USER_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case type.LOG_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case type.LOG_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case type.USER_DATA_REQUIRED:
            return {
                ...state,
                loading:true,
            }
        case type.USER_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case type.USER_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}