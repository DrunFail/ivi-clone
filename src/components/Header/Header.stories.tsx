import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import WrapperIntl from '../WrapperIntl/WrapperIntl';
import Header from "./Header";
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Header> = {
    title: 'header/Header',
    component: Header,
    decorators: [
        Story => <Provider store={store}>
            <WrapperIntl>
                <Story />
            </WrapperIntl>
        </Provider>
    ]
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const link = canvas.getByTestId('header-home-link')
        const navbarDropdown = canvas.getByTestId('navbar-dropdown')
        const btnSub = canvas.getByTestId('btn-sub')
        const btnSearch = canvas.getByTestId('btn-search')
        const profileDropdown = canvas.getByTestId('profile-dropdown')
        const lngSwitcher = canvas.getByTestId('lng-switcher')
        await expect(link).toBeInTheDocument()
        await expect(navbarDropdown).toBeInTheDocument()
        await expect(btnSub).toBeInTheDocument()
        await expect(btnSearch).toBeInTheDocument()
        await expect(profileDropdown).toBeInTheDocument()
        await expect(lngSwitcher).toBeInTheDocument()
        
    }
          
};