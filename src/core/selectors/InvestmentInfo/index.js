import { createSelector } from 'reselect';

export const getEmploymentInfoState = (state) => {
  return state.get('dashboard');
};

export const employmentAddressSelector = () =>
  createSelector(
    getEmploymentInfoState,
    (employmentInfoState) => employmentInfoState
  );

export const employmentStatusSelector = () =>
  createSelector(
    (state) => state.get('stocksInfo'),
    (employmentInfoState) => employmentInfoState
  );
