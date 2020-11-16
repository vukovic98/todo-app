import {call, put, takeEvery} from 'redux-saga/effects';
import { deleteTodoSuccess, deleteTodoFail, getUserTodos } from '../actions/todos';
import axiosInstance from '../../axios';
import swal from 'sweetalert';

function removeTodo(todo) {
   return axiosInstance
			.delete(`todos/` + todo + '/')
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

function* deleteTodo(action) {
    try {
       const todo = yield call(removeTodo, action.payload);

       if(todo !== undefined) {
         yield put(deleteTodoSuccess(todo));
       }

       yield put(getUserTodos());
    } catch (e) {
       yield put(deleteTodoFail(e));
    }
 }
 
 function* deleteTodoSaga() {
    yield takeEvery('DELETE_TODO_REQUESTED', deleteTodo);
 }
 
 export default deleteTodoSaga;