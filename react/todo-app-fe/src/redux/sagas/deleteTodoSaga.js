import {call, put, takeEvery} from 'redux-saga/effects';
import { deleteTodoSuccess, deleteTodoFail, getUserTodos } from '../actions/todos';
import axiosInstance from '../../axios';

function removeTodo(todo) {
   return axiosInstance
			.delete(`todos/` + todo + '/')
			.then((res) => res.data);
}

function* deleteTodo(action) {
    try {
       const todo = yield call(removeTodo, action.payload);
       yield put(deleteTodoSuccess(todo));

       yield put(getUserTodos());
    } catch (e) {
       yield put(deleteTodoFail(e));
    }
 }
 
 function* deleteTodoSaga() {
    yield takeEvery('DELETE_TODO_REQUESTED', deleteTodo);
 }
 
 export default deleteTodoSaga;