import type { Meta, StoryObj } from '@storybook/react';

import CommentSlider from "./CommentSlider";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';

const meta: Meta<typeof CommentSlider> = {
    title: 'sliders/CommentSlider',
    component: CommentSlider,
};

export default meta;
type Story = StoryObj<typeof CommentSlider>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <CommentSlider />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};