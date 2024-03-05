import type { Meta, StoryObj } from '@storybook/react';

import InputErrorBlock from "./InputErrorBlock";
import { Provider } from 'react-redux';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import PageWrapper from '../../../PageContainers/PageWrapper/PageWrapper';
import store from '../../../../store/store';

const meta: Meta<typeof InputErrorBlock> = {
    title: 'auth/InputErrorBlock',
    component: InputErrorBlock,
};

export default meta;
type Story = StoryObj<typeof InputErrorBlock>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <InputErrorBlock error="error text" />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};