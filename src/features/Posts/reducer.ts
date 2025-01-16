import { createAction, createReducer } from '@reduxjs/toolkit';
import { Post } from '../../types';

export interface State {
  data: Record<string, Post>;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: State = {
  data: {},
  isLoading: false,
  error: undefined,
};

const TYPE = 'POST';
const REQUEST = `${TYPE}/REQUEST`;
const SUCCESS = `${TYPE}/SUCCESS`;
const FAILURE = `${TYPE}/FAILURE`;

const request = createAction<string>(REQUEST);
const success = createAction<Post>(SUCCESS);
const failure = createAction<string>(FAILURE);

export const reducer = createReducer(initialState, builder => {
  builder
    .addCase(request, state => {
      state.isLoading = true;
      state.error = undefined;
    })
    .addCase(success, (state, action) => {
      state.data = { ...state.data, [action.payload.slug]: action.payload };
      state.isLoading = false;
    })
    .addCase(failure, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
});

export const actions = { request, success, failure };
