import { FC, ReactNode } from 'react';
import cl from './Title.module.css';
import cn from 'classnames';

interface TitleProps {
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode;
    className?: string;
    fontSize?: 's' | 'm' | 'l' | 'xl' | 'xxl';
    fontWeight?: 'regular' | 'semiBold' | 'Bold';
}

export const Title: FC<TitleProps> = ({
    tag: Component = 'h1',
    children,
    className,
    fontSize = 'm',
    fontWeight = 'regular',
}) => {
    return (
        <Component className={cn(className, cl[fontSize], cl[fontWeight])}>
            {children}
        </Component>
    );
};
