// import { authSlice } from "../store";
import { authActions } from '../store/slices/authSlice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export default function useAuth(): {
    user: boolean | null;
    setUserAuthStatus(status: boolean): void;
} {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.auth);

    const setUserAuthStatus = (status: boolean) => {
        dispatch(authActions.setUserAuthStatus(status));
    };

    return {
        user,
        setUserAuthStatus,
    };
}
