import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import MyApp from '../pages/_app';
import store from '../store/createStore';
import WrapperIntl from '../components/WrapperIntl/WrapperIntl';
import PageWrapper from '../components/PageContainers/PageWrapper/PageWrapper';
import Index from '../pages';
import RootLayout from '../components/layouts/RootLayout/RootLayout';

const meta: Meta<typeof MyApp> = {
    title: 'pages/HomePage',
    component: MyApp,
};

export default meta;
type Story = StoryObj<typeof MyApp>;

export const Large: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <RootLayout>
                    <Index />
                    </RootLayout>
                </PageWrapper>
            </WrapperIntl>
        </Provider>


};