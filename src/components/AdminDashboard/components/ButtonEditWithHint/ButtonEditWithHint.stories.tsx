import type { Meta, StoryObj } from '@storybook/react';

import ButtonEditWithHint from "./ButtonEditWithHint";
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import store from '../../../../store/store';

const meta: Meta<typeof ButtonEditWithHint> = {
    title: 'ButtonEditWithHint',
    component: ButtonEditWithHint,
};

export default meta;
type Story = StoryObj<typeof ButtonEditWithHint>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonEditWithHint onClickHandler={() => console.log('click')} />
            </WrapperIntl>
        </Provider>
    ,
};