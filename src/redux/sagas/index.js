import { fork } from 'redux-saga/effects';
import { getPost } from './post';

export default function* rootSaga() {
  yield fork(getPost);
}
