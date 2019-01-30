import { call, put, takeEvery } from 'redux-saga/effects';
import * as post from '../reducers/post';
import loadData from '../../lib/loadData';

function* getPost(action) {
  try {
    const data = yield call(loadData, action.payload);
    yield put({ type: post.GET_POST_SUCCESS, payload: { data } });
  } catch (error) {
    yield put({ type: post.GET_POST_ERROR, payload: { error } });
  }
}

export function* watchGetPost() {
  yield takeEvery(post.GET_POST, getPost);
}

/* export function* watchGetPost() {
  yield fork(handleGetPost);
} */
