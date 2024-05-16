import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import postsApi from './apis/postsApi';

const store = configureStore({
    reducer: { auth: authSlice.reducer, [postsApi.reducerPath]: postsApi.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware)
});

export { authSlice };

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;