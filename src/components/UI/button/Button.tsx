import React, { MouseEventHandler, ReactNode } from 'react';
import cn from 'classnames';
import cl from './Button.module.css';

interface Button {
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    view?: 'text' | 'icon';
    size?: 'big' | 'small';
    variant: 'btnIcon' | 'btnText' | 'btnDisabled';
    loader?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<Button> = ({
    className,
    children,
    onClick,
    view = 'text',
    size = 'small',
    variant = 'btnText',
    loader = false,
    type = 'button',
}) => {
    return loader === true ? (
        <button
            className={cn(className, cl[view], cl[size], cl[variant])}
            onClick={onClick}
        >
            <div className={cl.loader} />
        </button>
    ) : (
        <button
            className={cn(className, cl[view], cl[size], cl[variant])}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};
