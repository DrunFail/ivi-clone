import type { Meta, StoryObj } from '@storybook/react';

import RootLayout from "./RootLayout";
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';

const meta: Meta<typeof RootLayout> = {
    title: 'layouts/RootLayout',
    component: RootLayout,
};

export default meta;
type Story = StoryObj<typeof RootLayout>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <RootLayout>
                        <div style={{paddingBlock: "100px", fontSize: "40px", backgroundColor: "grey"} }>content</div>
                    </RootLayout>
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};