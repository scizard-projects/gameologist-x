import { call, put, takeLatest } from 'redux-saga/effects';

import { getPostBySlug } from '../../libs/Sanity';

import { actions } from './index';

function* watchRequest({
  payload,
}: ReturnType<typeof actions.request>): Generator<any, void, any> {
  try {
    const post = yield call(getPostBySlug, payload);
    yield put(actions.success(post));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(actions.failure(error.message));
    } else {
      yield put(actions.failure('Something went wrong, need debug.'));
    }
  }
}

export default function* root() {
  yield takeLatest(actions.request.type, watchRequest);
}
