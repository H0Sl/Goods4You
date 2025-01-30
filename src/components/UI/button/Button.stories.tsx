import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import 'style/main.css';
import './Button.module.css';
import img from 'img/icon-price.svg';

const meta: Meta<typeof Button> = {
    title: 'Компоненты/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const Cart: Story = {
    render: () => {
        return (
            <Button view="icon" size="small" variant="btnIcon">
                <img src={img} alt="" />
            </Button>
        );
    },
};

export const Disabled: Story = {
    render: () => {
        return (
            <Button view="text" size="small" variant="btnDisabled">
                Disabled
            </Button>
        );
    },
};

export const Loader: Story = {
    render: () => {
        return (
            <Button
                view="text"
                size="small"
                variant="btnDisabled"
                loader={true}
            >
                Loader
            </Button>
        );
    },
};
