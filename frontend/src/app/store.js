import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice';

// for redux devtools
export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer
  }

});
