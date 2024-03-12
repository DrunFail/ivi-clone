import type { Meta, StoryObj } from '@storybook/react';

import RatingModal from "./RatingModal";
import { Provider } from 'react-redux';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';
import store from '../../../store/store';

const meta: Meta<typeof RatingModal> = {
    title: 'RatingModal',
    component: RatingModal,
};

export default meta;
type Story = StoryObj<typeof RatingModal>;

export const Large: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <RatingModal visible call={() => console.log('callback') } />
                </PageWrapper>
            </WrapperIntl>
        </Provider>


};