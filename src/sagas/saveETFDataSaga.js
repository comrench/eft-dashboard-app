import { call, put, takeLatest } from 'redux-saga/effects';
import { saveETFDataToApi } from './serverApi';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* saveETFData(action) {
  console.log('saveETFData saga');
  const input = action.newInput;

  try {
    const result = yield call(saveETFDataToApi, input);

    if (result) {
      console.log('successfully fetched the details');
      console.log(result);
      yield put({ type: 'STOCK_RECEIVED', payload: result });
    } else {
      console.log('Got empty result from the API');
    }
  } catch (e) {
    console.log('Stock fetch failed');
    console.log(e);
    //yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export function* watchSaveETFDataSaga() {
  yield takeLatest('SAVE_STOCK', saveETFData);
}
