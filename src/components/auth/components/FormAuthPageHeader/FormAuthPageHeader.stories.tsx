import type { Meta, StoryObj } from '@storybook/react';

import FormAuthPageHeader from "./FormAuthPageHeader";
import { Provider } from 'react-redux';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import PageWrapper from '../../../PageContainers/PageWrapper/PageWrapper';
import store from '../../../../store/store';

const meta: Meta<typeof FormAuthPageHeader> = {
    title: 'auth/FormAuthPageHeader',
    component: FormAuthPageHeader,
};

export default meta;
type Story = StoryObj<typeof FormAuthPageHeader>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <FormAuthPageHeader title="form name"/>
                      
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};