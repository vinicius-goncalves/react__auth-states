import { authSlice } from "../store";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export default function useAuth(): { user: boolean, setAuthStatus(status: 'loggedIn' | 'loggedOut'): void  } {

    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.auth);

    const setAuthStatus = (status: 'loggedIn' | 'loggedOut') => {
        dispatch(authSlice.actions.setAuthStatus(status));
    }

    return {
        user,
        setAuthStatus
    }
}