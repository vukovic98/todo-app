import * as type from '../types';

export function createUser(user){
    return {
        type: type.REG_USER_REQUESTED,
        payload: user
    };
}

export function createUserSuccess(user){
    return {
        type: type.REG_USER_SUCCESS,
        payload: user
    };
}

export function createUserFail(user){
    return {
        type: type.REG_USER_FAILED,
        payload: user
    };
}

export function loginUser(valData){
    return {
        type: type.LOG_USER_REQUESTED,
        payload: valData
    };
}

export function loginUserSuccess(valData){
    return {
        type: type.LOG_USER_SUCCESS,
        payload: valData
    };
}

export function loginUserFail(valData){
    return {
        type: type.LOG_USER_FAILED,
        payload: valData
    };
}

export function userData(){
    return {
        type: type.USER_DATA_REQUIRED,
    };
}
export function userDataSuccess(user){
    return {
        type: type.USER_DATA_SUCCESS,
        payload: user
    };
}
export function userDataFail(error){
    return {
        type: type.USER_DATA_FAILED,
        payload: error
    };
}