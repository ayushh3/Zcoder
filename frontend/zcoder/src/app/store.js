import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../feature/userSlice'; // Ensure the path is correct

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
