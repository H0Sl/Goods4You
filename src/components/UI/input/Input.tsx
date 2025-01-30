import React, { ChangeEvent } from 'react';
import cl from './Input.module.css';
interface InputProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder: string;
    type?: 'text' | 'password';
}

export const Input: React.FC<InputProps> = ({
    onChange,
    value,
    placeholder,
    type = 'text',
}) => {
    return (
        <input
            type={type}
            onChange={onChange}
            className={cl.input}
            placeholder={placeholder}
            value={value ?? ''}
        />
    );
};
