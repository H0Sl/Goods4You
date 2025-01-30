import { useGetCurrentUserQuery } from 'api/login-user';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cl from './AuthCheck.module.css';
import React from 'react';

export const AuthCheck = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const { error, isLoading } = useGetCurrentUserQuery();

    useEffect(() => {
        if (error) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    }, [error, navigate]);

    if (isLoading) {
        return (
            <div className={cl.box}>
                <div className={cl.loader} />
            </div>
        );
    }

    return <>{children}</>;
};
