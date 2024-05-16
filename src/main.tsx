import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import { Provider } from 'react-redux';
import store from './store/index.ts';
import UserPage from './pages/UserPage.tsx';
import ProtectedPage from './pages/ProtectedPage.tsx';
import PostsPage from './pages/PostsPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
    { path: '/login', element: <LoginPage /> },
    {
        path: '/',
        element: <ProtectedPage />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'user', element: <UserPage /> },
            { path: 'posts', element: <PostsPage /> },
        ],
    },
]);

const children: JSX.Element = (
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

const root = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(root).render(children);
