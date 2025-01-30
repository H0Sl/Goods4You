import { Button } from 'components/UI/button';
import { Title } from 'components/UI/title';
import 'style/container.css';
import cl from './LoginMain.module.css';
import { Input } from 'components/UI/input';
import React, { ChangeEvent, useState } from 'react';
import { useLoginMutation } from 'api/login-user';
import { useNavigate } from 'react-router-dom';

export const LoginMain = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [login, { isLoading }] = useLoginMutation();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Email and password are required');
        }
        try {
            const result = await login({
                username: email,
                password: password,
                expiresInMins: 30,
            }).unwrap();
            localStorage.setItem('token', result.accessToken);
            navigate('/');
        } catch (err) {
            alert(`Error ${err}`);
        }
    };

    const newEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const newPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className={cl.loginMain}>
            <div className="container">
                <div className={cl.content}>
                    <div className={cl.title}>
                        <Title tag="h1" fontWeight="Bold" fontSize="xxl">
                            Sign in
                        </Title>
                    </div>
                    <form className={cl.form} onSubmit={handleLogin}>
                        <Input
                            onChange={newEmail}
                            value={email}
                            placeholder="Email"
                            type="text"
                        />
                        <Input
                            onChange={newPassword}
                            value={password}
                            placeholder="Password"
                            type="password"
                        />
                        <Button type="submit" variant="btnText">
                            {isLoading ? 'Logging in...' : 'Sign in'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
