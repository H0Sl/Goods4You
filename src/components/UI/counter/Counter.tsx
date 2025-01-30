import React, { MouseEventHandler } from 'react';
import { Button } from '../button';
import cl from './Counter.module.css';
import cn from 'classnames';

interface CounterProps {
    size?: 'sizeM';
    children: number;
    onMinusClick?: MouseEventHandler<HTMLButtonElement>;
    onPlusClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Counter: React.FC<CounterProps> = ({
    size = 'sizeM',
    children,
    onMinusClick,
    onPlusClick,
}) => {
    return (
        <div className={cl.counter}>
            <Button
                className={cn(cl.btn, cl[size])}
                view="icon"
                onClick={onMinusClick}
                variant="btnIcon"
            >
                <div className={cl.minus} />
            </Button>
            <span>{children} items</span>
            <Button
                className={cn(cl.btn, cl[size])}
                view="icon"
                onClick={onPlusClick}
                variant="btnIcon"
            >
                <div className={cl.plus} />
            </Button>
        </div>
    );
};
