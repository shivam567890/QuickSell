import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  finalData: [],
  apiTickets: [],
  allUser: [],
  user: false,
  message: '',
};

const ApiDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('FETCH_DATA', (state) => {
      state.finalData = [];
    })
    .addCase('DATA', (state, action) => {
      state.apiTickets = action.payload.tickets;
      state.allUser = action.payload.users;
    });
});

const DisplayDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('INITIALIZATION', (state) => {
      state.finalData = [];
    })
    .addCase('SUCCESS', (state, action) => {
      state.finalData = action.payload.finalData;
      state.user = action.payload.user;
    })
    .addCase('FAILURE', (state, action) => {
      state.finalData = [];
      state.message = action.payload.message;
    });
});

export { ApiDataReducer, DisplayDataReducer };
