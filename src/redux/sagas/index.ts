import { all } from 'redux-saga/effects';

import { saga as posts } from '../../features/Posts';
import { saga as sections } from '../../features/Sections';

export default function* root() {
  yield all([posts(), sections()]);
}
