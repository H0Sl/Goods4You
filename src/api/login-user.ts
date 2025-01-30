import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginUser } from 'models/loginUser';

const baseUrl: string = import.meta.env.VITE_BASE_URL;

export const fetchLogin = createApi({
    reducerPath: 'fetchLogin',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: headers => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: builder => ({
        login: builder.mutation<
            LoginUser,
            { username: string; password: string; expiresInMins: number }
        >({
            query: body => ({
                url: 'auth/login',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: body,
            }),
        }),
        getCurrentUser: builder.query<LoginUser, void>({
            query: () => 'auth/me',
        }),
    }),
});

export const { useLoginMutation, useGetCurrentUserQuery } = fetchLogin;
