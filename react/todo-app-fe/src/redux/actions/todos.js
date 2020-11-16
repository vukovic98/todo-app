import * as type from '../types';

export function getUserTodos(){
    return {
        type: type.USER_TODOS_REQUESTED,
    };
}

export function userTodosSuccess(todos){
    return {
        type: type.USER_TODOS_SUCCESS,
        payload: todos
    };
}

export function userTodosFail(error){
    return {
        type: type.USER_TODOS_FAILED,
        payload: error
    };
}

export function createTodo(vals){
    return {
        type: type.CREATE_TODO_REQUESTED,
        payload: vals
    };
}

export function createTodoSuccess(todo){
    return {
        type: type.CREATE_TODO_SUCCESS,
        payload: todo
    };
}

export function createTodoFail(error){
    return {
        type: type.CREATE_TODO_FAILED,
        payload: error
    };
}