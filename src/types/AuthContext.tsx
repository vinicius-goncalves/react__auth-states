interface IAuthContext {
    user: boolean | null;
    updateAuthStatus(status: 'loggedIn' | 'loggedOut'): void;
}

export default IAuthContext;