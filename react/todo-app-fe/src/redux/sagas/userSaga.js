import {call, put, takeEvery} from 'redux-saga/effects';
import { createUserFail, createUserSuccess, loginUser } from '../actions/users';
import axiosInstance from '../../axios';
import swal from 'sweetalert';

function registerUser(values) {
    return axiosInstance
               .post(`register/`, 
                  JSON.stringify(values),
               )
               .then((response) => response.data)
               .catch((mess) => {
                  console.log(mess);
                  swal({
                     title: "Error",
                     text: "User with given username already exists!",
                     icon: "warning",
                     button: "Ok",
                   });
               })
}

function* createUser(action) {
    try {
       const user = yield call(registerUser, action.payload);
       
       if(user !== undefined) {
         yield put(createUserSuccess(user));

         const name = user.username;
         const pass = action.payload.password;

         const logData = '{"username":"' + name + '", "password":"' + pass + '"}';
         
         yield put(loginUser(JSON.parse(logData)));

         window.location.href('mainPage');
       }
    } catch (e) {
       yield put(createUserFail(e));
    }
 }
 
 function* userSaga() {
    yield takeEvery('REG_USER_REQUESTED', createUser);
 }
 
 export default userSaga;