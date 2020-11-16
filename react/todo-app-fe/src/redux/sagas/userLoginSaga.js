import {call, put, takeEvery} from 'redux-saga/effects';
import { loginUserSuccess, loginUserFail, userData } from '../actions/users';
import axiosInstance from '../../axios';
import swal from 'sweetalert';

function loginUser(valData) {
    console.log("DATA:", JSON.stringify(valData));
    return axiosInstance
			.post(`api/token/`, JSON.stringify(valData))
         .then((res) => {
            localStorage.setItem('access_token', res.data.access);

            window.location.href="mainPage";
         })
         .catch((mess) => {
            console.log(mess);
            swal({
               title: "Error",
               text: "There is no user with given credentials!",
               icon: "warning",
               button: "Ok",
             }).then(() => {
               window.location.href = '/login';
             })
         })
}

function* logUser(action) {
    try {
       const keys = yield call(loginUser, action.payload);
       
       if(keys !== undefined) {
         yield put(loginUserSuccess(keys));

         yield put(userData());
       }
    } catch (e) {
       yield put(loginUserFail(e));
    }
 }
 
 function* userLoginSaga() {
    yield takeEvery('LOG_USER_REQUESTED', logUser);
 }
 
 export default userLoginSaga;