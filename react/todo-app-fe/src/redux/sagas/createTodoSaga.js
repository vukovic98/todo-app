import {call, put, takeEvery} from 'redux-saga/effects';
import { createTodoSuccess, createTodoFail, getUserTodos } from '../actions/todos';
import axiosInstance from '../../axios';
import swal from 'sweetalert';

function sendTodo(todo) {
   return axiosInstance
			.post(`todos/`, JSON.stringify(todo))
         .then((res) => res.data)
         .catch((mess) => {
            console.log(mess);
            swal({
               title: "Error",
               text: "Your session has expired, please log in again!",
               icon: "warning",
               button: "Ok",
             }).then(() => {
               window.location.href = '/';
             })
         })
}

function* createTodo(action) {
    try {
       const todo = yield call(sendTodo, action.payload);

       if(todo !== undefined) {
         yield put(createTodoSuccess(todo));
       }

       yield put(getUserTodos());
    } catch (e) {
       yield put(createTodoFail(e));
    }
 }
 
 function* createTodoSaga() {
    yield takeEvery('CREATE_TODO_REQUESTED', createTodo);
 }
 
 export default createTodoSaga;