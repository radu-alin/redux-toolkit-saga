import { all } from 'redux-saga/effects';

import { postsSaga } from '../../features/posts/redux/postsSaga';

export function* rootSaga() {
  yield all([postsSaga()]);
}
