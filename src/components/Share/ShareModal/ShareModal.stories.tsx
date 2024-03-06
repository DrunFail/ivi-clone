import type { Meta, StoryObj } from '@storybook/react';

import ShareModal from "./ShareModal";
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';

const meta: Meta<typeof ShareModal> = {
    title: 'modals/ShareModal',
    component: ShareModal,
};

export default meta;
type Story = StoryObj<typeof ShareModal>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <ShareModal visible />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};