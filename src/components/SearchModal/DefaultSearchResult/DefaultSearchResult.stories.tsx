import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import DefaultSearchResult from "./DefaultSearchResult";
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof DefaultSearchResult> = {
    title: 'search/DefaultSearchResult',
    component: DefaultSearchResult,
};

export default meta;
type Story = StoryObj<typeof DefaultSearchResult>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <DefaultSearchResult />
            </WrapperIntl>
        </Provider>
};