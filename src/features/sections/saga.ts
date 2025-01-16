import { call, put, select, takeLatest } from 'redux-saga/effects';

import sectionsConfig, { LIMIT } from '../../configs/sections';
import { getPosts } from '../../libs/Sanity';
import { Post } from '../../types';
import {
  createFeedSections,
  getAdSection,
  getShortSection,
} from '../../utils/sections';
import { actions } from './index';
import { State } from './reducer';

function* watchRequest({}: ReturnType<typeof actions.request>): Generator<
  any,
  void,
  any
> {
  try {
    const loadFresh = true;

    const { sections } = yield select((state: { sections: State }) => state);

    const posts: Post[] = yield call(getPosts, LIMIT);

    // Create an updated section array by duplicating the original section array (except the 0-indexed section)
    const updatedSection = [...sectionsConfig.slice(1)];

    // Randomize the order of the remaining sections (except the 0-indexed section)
    updatedSection.sort(() => 0.5 - Math.random());

    // Insert the 0-indexed section at the beginning of the updated section array
    updatedSection.unshift(sectionsConfig[0]);

    // Create an updated data array based on the fetched data and the predefined section configuration
    const dataArray = createFeedSections(posts, updatedSection);

    if (loadFresh) {
      dataArray.splice(0, 0, getShortSection());
    }

    // Create an updated data array based on the fetched data and the predefined section configuration
    const updatedDataArray = !loadFresh
      ? [...sections.data, ...dataArray]
      : dataArray;

    // Insert an ad section after the first section
    dataArray.splice(1, 0, getAdSection());
    dataArray.splice(3, 0, getAdSection());

    yield put(actions.success(updatedDataArray));
  } catch (error: any) {
    yield put(actions.failure('Error'));
  }
}

export default function* root() {
  yield takeLatest(actions.request.type, watchRequest);
}
