import type { Meta, StoryObj } from '@storybook/react';

import ButtonDeleteWithHint from "./ButtonDeleteWithHint";
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import store from '../../../../store/createStore';

const meta: Meta<typeof ButtonDeleteWithHint> = {
    title: 'ButtonDeleteWithHint',
    component: ButtonDeleteWithHint,
};

export default meta;
type Story = StoryObj<typeof ButtonDeleteWithHint>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonDeleteWithHint onClickHandler={() => console.log('click')} />
            </WrapperIntl>
        </Provider>
    ,
};