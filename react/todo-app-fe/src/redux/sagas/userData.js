import {call, put, takeEvery} from 'redux-saga/effects';
import { userDataSuccess, userDataFail } from '../actions/users';
import axiosInstance from '../../axios';

function getData() {
   return axiosInstance
			.get(`user/me`)
			.then((res) => res.data);
}

function* userData(action) {
    try {
       const user = yield call(getData);
       yield put(userDataSuccess(user));
    } catch (e) {
       yield put(userDataFail(e));
    }
 }
 
 function* userDataSaga() {
    yield takeEvery('USER_DATA_REQUIRED', userData);
 }
 
 export default userDataSaga;