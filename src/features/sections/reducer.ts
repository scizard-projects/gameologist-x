import { createAction, createReducer } from '@reduxjs/toolkit';
import { Section } from '../../types';

export interface State {
  data: Section[];
  isLoading: boolean;
  error: string | undefined;
}

const initialState: State = {
  data: [],
  isLoading: false,
  error: undefined,
};

const TYPE = 'SECTIONS';
const REQUEST = `${TYPE}/REQUEST`;
const SUCCESS = `${TYPE}/SUCCESS`;
const FAILURE = `${TYPE}/FAILURE`;

const request = createAction(REQUEST);
const success = createAction<Section[]>(SUCCESS);
const failure = createAction<string>(FAILURE);

export const reducer = createReducer(initialState, builder => {
  builder
    .addCase(request, state => {
      state.isLoading = true;
      state.error = undefined;
    })
    .addCase(success, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(failure, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
});

export const actions = { request, success, failure };
