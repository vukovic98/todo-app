import {call, put, takeEvery} from 'redux-saga/effects';
import { userDataSuccess, userDataFail } from '../actions/users';
import axiosInstance from '../../axios';
import swal from 'sweetalert';

function getData() {
   return axiosInstance
			.get(`user/me`)
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

function* userData(action) {
    try {
       const user = yield call(getData);

       if(user !== undefined) {
         yield put(userDataSuccess(user));
       }
    } catch (e) {
       yield put(userDataFail(e));
    }
 }
 
 function* userDataSaga() {
    yield takeEvery('USER_DATA_REQUIRED', userData);
 }
 
 export default userDataSaga;