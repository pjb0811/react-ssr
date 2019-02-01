import { call, put, take } from 'redux-saga/effects';
import * as post from '../reducers/post';
import loadData from '../../lib/loadData';

export function* getPost() {
  while (true) {
    try {
      const { payload } = yield take(post.getPost);
      const data = yield call(loadData, payload);
      yield put(post.getPostSuccess({ data }));
    } catch (e) {
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
