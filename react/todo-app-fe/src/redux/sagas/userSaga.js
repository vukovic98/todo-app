import {call, put, takeEvery} from 'redux-saga/effects';
import { createUserFail, createUserSuccess, loginUser } from '../actions/users';
import axiosInstance from '../../axios';

function registerUser(values) {
    return axiosInstance
               .post(`register/`, 
                  JSON.stringify(values),
               )
               .then((response) => response.data);
}

function* createUser(action) {
    try {
       const user = yield call(registerUser, action.payload);
       yield put(createUserSuccess(user));

       const name = user.username;
       const pass = action.payload.password;

       const logData = '{"username":"' + name + '", "password":"' + pass + '"}';
       
       yield put(loginUser(JSON.parse(logData)));
    } catch (e) {
       yield put(createUserFail(e));
    }
 }
 
 function* userSaga() {
    yield takeEvery('REG_USER_REQUESTED', createUser);
 }
 
 export default userSaga;