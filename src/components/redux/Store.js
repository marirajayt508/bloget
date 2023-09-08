import { configureStore } from '@reduxjs/toolkit';
import { Blogs } from './getBlogsSlice';
import { tokens } from './signinSlice';

const store = configureStore({
  reducer: {
    blogs: Blogs,
    token: tokens,
  },
});
export default store;
