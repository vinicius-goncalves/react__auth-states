import { NavLink, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function ProtectedPage(): JSX.Element {
    const { user, setUserAuthStatus } = useAuth();

    if (!user) {
        return <Navigate to="login" />;
    }

    function logout() {
        setUserAuthStatus(false);
    }

    return (
        <>
            <header className="flex justify-between items-center w-full p-2">
                <nav>
                    <ul className="flex gap-3 &_.active:bg-red-500">
                        <li>
                            <NavLink
                                to="user"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-color0 font-bold'
                                        : 'text-color0'
                                }>
                                User
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="posts"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-color0 font-bold'
                                        : 'text-color0'
                                }>
                                Posts
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button
                    type="button"
                    className="bg-color0 text-white p-2 rounded-md"
                    onClick={logout}>
                    Logout
                </button>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="absolute bottom-1 text-center w-full">
                <p>Reserved rights reversed to us</p>
            </footer>
        </>
    );
}

export default ProtectedPage;
