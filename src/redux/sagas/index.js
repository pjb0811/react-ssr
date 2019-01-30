import { all, fork } from 'redux-saga/effects';
import { watchGetPost } from './post';

export default function* rootSaga() {
  yield all([fork(watchGetPost)]);
}
