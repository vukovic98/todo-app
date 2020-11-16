import {call, put, takeEvery} from 'redux-saga/effects';
import { userTodosSuccess, userTodosFail } from '../actions/todos';
import axiosInstance from '../../axios';
import swal from 'sweetalert';

function getData() {
   return axiosInstance
			.get(`todos/`)
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

function* userTodos(action) {
    try {
       const todos = yield call(getData);

       if(todos !== undefined) {
         yield put(userTodosSuccess(todos));
       }
    } catch (e) {
       yield put(userTodosFail(e));
    }
 }
 
 function* userTodosSaga() {
    yield takeEvery('USER_TODOS_REQUESTED', userTodos);
 }
 
 export default userTodosSaga;