import type { Meta, StoryObj } from '@storybook/react';

import RatingBlock from "./RatingBlock";
import { Provider } from 'react-redux';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import store from '../../../store/store';

const meta: Meta<typeof RatingBlock> = {
    title: 'RatingBlock',
    component: RatingBlock,
};

export default meta;
type Story = StoryObj<typeof RatingBlock>;

export const Large: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                    <RatingBlock ratingValue={8 } />
            </WrapperIntl>
        </Provider>


};