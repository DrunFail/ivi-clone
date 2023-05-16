import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../store/createStore';
import WrapperIntl from '../WrapperIntl/WrapperIntl';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';

import Header from "./Header";

const meta: Meta<typeof Header> = {
    title: 'Header',
    component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    render: () =>
        
        <Provider store={store}>
            <WrapperIntl>
                <HeaderContainer>
                        <Header />
                </HeaderContainer>
            </WrapperIntl>
            </Provider>
       
};