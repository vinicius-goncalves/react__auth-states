import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';

const user = localStorage.getItem('user')
    ? (JSON.parse(localStorage.getItem('user') as string) as boolean)
    : false;

const authInitialState: { user: boolean } = {
    user,
} satisfies { user: boolean };

const authSlice: Slice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        setUserAuthStatus(state, action: PayloadAction<boolean>) {
            state.user = action.payload;

            if (window && window.localStorage) {
                localStorage.setItem('user', JSON.stringify(action.payload));
            }
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;
