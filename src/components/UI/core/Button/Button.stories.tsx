import type { Meta, StoryObj } from '@storybook/nextjs';
import Button from './Button';
import { Provider } from 'react-redux';
import store from '../../../../store/store';
import { Title, Story, Canvas } from '@storybook/addon-docs/blocks';
import FontIcon from '../../FontIcon/FontIcon';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Canvas />

                    <Title>ButtonCall</Title>
                    <Canvas of={ButtonCall} />

                    <Title>ButtonMail</Title>
                    <Canvas of={ButtonMail} />

                    <Title>LogoutButton</Title>
                    <Canvas of={LogoutButton} />

                    <Title>ShareButton</Title>
                    <Canvas of={ShareButton} />

                    <Title>WatchLaterButton</Title>
                    <Canvas of={WatchLaterButton} />

                    <Title>ButtonClose</Title>
                    <Canvas of={ButtonClose} />

                    <Title>ButtonFormAuthSubmit</Title>
                    <Canvas of={ButtonFormAuthSubmit} />
                </>
            ),
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonAsLink: Story = {
    args: {
        as: 'link',
        children: 'button',
        href: '/ivi',
        color: 'red',
    },
};

export const ButtonAsButton: Story = {
    args: {
        as: 'button',
        children: 'button',
    },
};
export const ButtonCall: Story = {
    args: {
        as: 'button',
        children: <FontIcon variant="phone" />,
        size: 'mini',
    },
};

export const ButtonMail: Story = {
    args: {
        as: 'button',
        children: <FontIcon variant="mail" />,
        size: 'mini',
    },
};

export const LogoutButton: Story = {
    args: {
        as: 'button',
        color: 'red',
        children: 'Выйти',
    },
};

export const ShareButton: Story = {
    args: {
        as: 'button',
        size: 'mini',
        children: <FontIcon variant="arrow" />,
    },
};

export const WatchLaterButton: Story = {
    args: {
        as: 'button',
        size: 'mini',
        children: <FontIcon variant="bookmark2" />,
    },
};

export const ButtonClose: Story = {
    args: {
        as: 'button',
        onlyImage: true,
        children: <FontIcon variant="close" size={20} />,
    },
};

export const ButtonFormAuthSubmit: Story = {
    args: {
        as: 'button',
        type: 'submit',
        color: 'red',
        children: 'Продолжить',
    },
};
