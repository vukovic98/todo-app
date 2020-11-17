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

export function deleteTodo(id){
    return {
        type: type.DELETE_TODO_REQUESTED,
        payload: id
    };
}

export function deleteTodoSuccess(){
    return {
        type: type.DELETE_TODO_SUCCESS
    };
}

export function deleteTodoFail(error){
    return {
        type: type.DELETE_TODO_FAILED,
        payload: error
    };
}

export function editTodo(todo){
    return {
        type: type.EDIT_TODO_REQUESTED,
        payload: todo
    };
}

export function editTodoSuccess(newTodo){
    return {
        type: type.EDIT_TODO_SUCCESS,
        payload: newTodo
    };
}

export function editTodoFail(error){
    return {
        type: type.EDIT_TODO_FAILED,
        payload: error
    };
}