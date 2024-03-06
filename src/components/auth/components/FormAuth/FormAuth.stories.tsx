import type { Meta, StoryObj } from '@storybook/react';

import FormAuth from "./FormAuth";
import { Provider } from 'react-redux';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import PageWrapper from '../../../PageContainers/PageWrapper/PageWrapper';
import store from '../../../../store/store';

const meta: Meta<typeof FormAuth> = {
    title: 'auth/FormAuth',
    component: FormAuth,
};

export default meta;
type Story = StoryObj<typeof FormAuth>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <FormAuth>
                    form fields
                    </FormAuth>
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};