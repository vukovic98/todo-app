import {call, put, takeEvery} from 'redux-saga/effects';
import { editTodoSuccess, editTodoFail, getUserTodos } from '../actions/todos';
import axiosInstance from '../../axios';

function changeTodo(todo) {
    console.log("ID ID: ", todo.id);
   return axiosInstance
			.put(`todos/` + todo.id + '/', JSON.stringify(todo))
			.then((res) => res.data);
}

function* editTodo(action) {
    try {
       const todo = yield call(changeTodo, action.payload);
       yield put(editTodoSuccess(todo));

       yield put(getUserTodos());
    } catch (e) {
       yield put(editTodoFail(e));
    }
 }
 
 function* editTodoSaga() {
    yield takeEvery('EDIT_TODO_REQUESTED', editTodo);
 }
 
 export default editTodoSaga;