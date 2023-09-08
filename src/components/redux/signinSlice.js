import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getToken = createAsyncThunk('token/getToken', async (datas={}) => {
  const res = axios
    .get('https://dummyjson.com/prodts',datas)
    .then((d) => d.data);
    // const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJuYW1lIjoibWFyaXJhamEifQ.tAfqIVB2KbfaxYZI7gCZbRGEwyx-6rBnFMUeXtrqiIc";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsIm5hbWUiOiJtYXJpcmFqYSJ9.psCUwKX9HTMV4bKhSBTqw-h0fqkmYmWfJxS7xKsPoJ0"
  return token;
});

const initialState = {
  token: "",
  loading: false,
  error: false,
};

const name = 'getTokens';

const reducers = {};

const extraReducers = {
  [getToken.pending]: (state) => {
    state.loading = true;
  },
  [getToken.fulfilled]: (state, { payload }) => {
    state.loading = false;
    state.token = payload;
  },
  [getToken.rejected]: (state) => {
    state.error = true;

  },
},

const getTokens = createSlice({ name, initialState, reducers, extraReducers });

const tokens = getTokens.reducer

export {getToken,tokens}
