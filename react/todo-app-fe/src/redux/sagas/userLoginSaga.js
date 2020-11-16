import {call, put, takeEvery} from 'redux-saga/effects';
import { loginUserSuccess, loginUserFail, userData } from '../actions/users';
import axiosInstance from '../../axios';

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
            alert("No User With Given Credentials!");
         })
}

function* logUser(action) {
    try {
       const keys = yield call(loginUser, action.payload);
       yield put(loginUserSuccess(keys));

       yield put(userData());
    } catch (e) {
       yield put(loginUserFail(e));
    }
 }
 
 function* userLoginSaga() {
    yield takeEvery('LOG_USER_REQUESTED', logUser);
 }
 
 export default userLoginSaga;