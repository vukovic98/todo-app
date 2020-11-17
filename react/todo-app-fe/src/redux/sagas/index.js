import {all} from 'redux-saga/effects';
import createTodoSaga from './createTodoSaga';
import userDataSaga from './userData';
import userLoginSaga from './userLoginSaga';
import userSaga from './userSaga';
import userTodosSaga from './userTodosSaga';
import deleteTodoSaga from './deleteTodoSaga';
import editTodoSaga from './editTodoSaga';

export default function* rootSaga() {
    yield all([
      userSaga(),
      userDataSaga(),
      userLoginSaga(),
      userTodosSaga(),
      createTodoSaga(),
      deleteTodoSaga(),
      editTodoSaga(),
    ])
  }