import { createAction, createReducer } from '@reduxjs/toolkit';
import { Post } from '../../types';

export interface State {
  data: Record<string, Post>;
}

const initialState: State = {
  data: {},
};

const TYPE = 'BOOKMARK';
const ADD = `${TYPE}/ADD`;
const REMOVE = `${TYPE}/REMOVE`;

const add = createAction<Post>(ADD);
const remove = createAction<Post>(REMOVE);

export const reducer = createReducer(initialState, builder => {
  builder
    .addCase(add, (state, action) => {
      state.data = { ...state.data, [action.payload.id]: action.payload };
    })
    .addCase(remove, (state, action) => {
      const data = { ...state.data };
      delete data[action.payload.id];
      state.data = { ...data };
    });
});

export const actions = { add, remove };
