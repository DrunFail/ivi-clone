import type { Meta, StoryObj } from '@storybook/react';

import MobileNavBar from "./MobileNavBar";
import { Provider } from 'react-redux';
import store from '../../store/createStore';
import WrapperIntl from '../WrapperIntl/WrapperIntl';

const meta: Meta<typeof MobileNavBar> = {
    title: 'MobileNavBar',
    component: MobileNavBar,
};

export default meta;
type Story = StoryObj<typeof MobileNavBar>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                
                    <MobileNavBar />
                
            </WrapperIntl>
        </Provider>

    ,
};