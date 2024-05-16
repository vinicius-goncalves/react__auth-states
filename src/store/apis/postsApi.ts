import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => ({
                url: 'posts?_limit=5',
                method: 'GET'
            })
        })
    })
});

export const {
    useGetPostsQuery
} = postsApi;

export default postsApi;