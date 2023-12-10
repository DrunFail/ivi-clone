import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import SearchResultCard from "./SearchResultCard";
import WrapperIntl from '../../../../WrapperIntl/WrapperIntl';
import store from '../../../../../store/createStore';

const meta: Meta<typeof SearchResultCard> = {
    title: 'SearchResultCard',
    component: SearchResultCard,
};

export default meta;
type Story = StoryObj<typeof SearchResultCard>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <SearchResultCard name={'name'} year={2022} id={5} callback={function(): void {
                    throw new Error('Function not implemented.');
                } } />
            </WrapperIntl>
        </Provider>
};