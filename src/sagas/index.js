import { all } from 'redux-saga/effects';
import { watchGetETFDataSaga } from './getETFDataSaga';
import { watchSaveETFDataSaga } from './saveETFDataSaga';

export default function* rootSaga() {
  yield all([watchGetETFDataSaga(), watchSaveETFDataSaga()]);
}
