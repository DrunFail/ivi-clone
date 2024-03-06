import type { Meta, StoryObj } from '@storybook/react';

import EditCardContainer from "./EditCardContainer";
import { Provider } from 'react-redux';
import store from '../../../../store/store';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof EditCardContainer> = {
    title: 'admin/EditCardContainer',
    component: EditCardContainer,
};

export default meta;
type Story = StoryObj<typeof EditCardContainer>;

const menu = [{ id: 1, name: "option1", link: "" }, { id: 2, name: "option2", link: "" }]

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <EditCardContainer>
                card component
                </EditCardContainer>
            </WrapperIntl>
        </Provider>

    ,
};