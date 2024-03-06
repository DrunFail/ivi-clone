import type { Meta, StoryObj } from '@storybook/react';
import ButtonSubscription from "./ButtonSubscription";
import { Provider } from 'react-redux';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import store from '../../../../store/store';

const meta: Meta<typeof ButtonSubscription> = {
    title: 'header/components/ButtonSubscription',
    component: ButtonSubscription,
    decorators: [
        Story => <Provider store={store}>
            <WrapperIntl>
                <Story />
            </WrapperIntl>
        </Provider>
    ]
};

export default meta;
type Story = StoryObj<typeof ButtonSubscription>;

export const Primary: Story = {}