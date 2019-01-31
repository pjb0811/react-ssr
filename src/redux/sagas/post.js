import { call, put, take } from 'redux-saga/effects';
import * as post from '../reducers/post';
import loadData from '../../lib/loadData';

export function* getPost() {
  while (true) {
    const { payload } = yield take(post.getPost);
    const data = yield call(loadData, payload);
    if (data) {
      yield put(post.getPostSuccess({ data }));
    } else {
      yield put(post.getPostError());
    }
  }
}

/* export function* watchGetPost() {
  const { payload } = yield take(post.getPost);
  yield fork(getPost, payload);
  // yield takeEvery(post.GET_POST, getPost);
} */

/* export function* watchGetPost() {
  yield fork(handleGetPost);
} */
