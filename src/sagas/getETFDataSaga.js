import { call, put, takeLatest } from 'redux-saga/effects';
import { getStockDetailsFromApi } from './serverApi';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getStockDetails(action) {
  console.log('getStockDetails saga');
  const { symbol } = action.newInput;

  try {
    const result = yield call(getStockDetailsFromApi, { symbol });

    if (result) {
      console.log('successfully fetched the details');
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
export function* watchGetETFDataSaga() {
  yield takeLatest('GET_STOCK', getStockDetails);
}
