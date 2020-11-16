import {call, put, takeEvery} from 'redux-saga/effects';
import { createTodoSuccess, createTodoFail, getUserTodos } from '../actions/todos';
import axiosInstance from '../../axios';

function sendTodo(todo) {
   return axiosInstance
			.post(`todos/`, JSON.stringify(todo))
			.then((res) => res.data);
}

function* createTodo(action) {
    try {
       const todo = yield call(sendTodo, action.payload);
       yield put(createTodoSuccess(todo));

       yield put(getUserTodos());
    } catch (e) {
       yield put(createTodoFail(e));
    }
 }
 
 function* createTodoSaga() {
    yield takeEvery('CREATE_TODO_REQUESTED', createTodo);
 }
 
 export default createTodoSaga;