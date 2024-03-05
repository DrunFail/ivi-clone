import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import SearchModal from "./SearchModal";
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import store from '../../../store/store';

const meta: Meta<typeof SearchModal> = {
    title: 'SearchModal',
    component: SearchModal,
};

export default meta;
type Story = StoryObj<typeof SearchModal>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <SearchModal visible handleVisible={function(): void {
                    throw new Error('Function not implemented.');
                } } />
            </WrapperIntl>
        </Provider>
};