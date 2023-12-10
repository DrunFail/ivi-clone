import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import DefaultSearchResult from "./DefaultSearchResult";
import WrapperIntl from '../../../../WrapperIntl/WrapperIntl';
import store from '../../../../../store/createStore';

const meta: Meta<typeof DefaultSearchResult> = {
    title: 'DefaultSearchResult',
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