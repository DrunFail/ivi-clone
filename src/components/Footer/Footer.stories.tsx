import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../store/createStore';
import WrapperIntl from '../WrapperIntl/WrapperIntl';
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
    title: 'Footer',
    component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <Footer />
            </WrapperIntl>
        </Provider>
};