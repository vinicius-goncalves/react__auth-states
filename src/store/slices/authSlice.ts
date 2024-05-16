import { Slice, createSlice } from '@reduxjs/toolkit';

const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string) as boolean
    : null;

const authInitialState: { user: boolean | null } = {
    user
};

const authSlice: Slice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        setAuthStatus(state, action) {

            const status = action.payload;

            if(status === 'loggedIn') {
                localStorage.setItem('user', 'true');
                state.user = true;
            }

            if(status === 'loggedOut') {
                localStorage.setItem('user', 'false');
                state.user = false;
            }
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;