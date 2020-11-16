import {call, put, takeEvery} from 'redux-saga/effects';
import { userTodosSuccess, userTodosFail } from '../actions/todos';
import axiosInstance from '../../axios';

function getData() {
   return axiosInstance
			.get(`todos/`)
			.then((res) => res.data);
}

function* userTodos(action) {
    try {
       const todos = yield call(getData);
       yield put(userTodosSuccess(todos));
    } catch (e) {
       yield put(userTodosFail(e));
    }
 }
 
 function* userTodosSaga() {
    yield takeEvery('USER_TODOS_REQUESTED', userTodos);
 }
 
 export default userTodosSaga;