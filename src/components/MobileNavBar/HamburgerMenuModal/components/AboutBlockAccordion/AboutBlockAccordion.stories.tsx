import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';

import AboutBlockAccordion from "./AboutBlockAccordion";
import WrapperIntl from '../../../../WrapperIntl/WrapperIntl';
import store from '../../../../../store/createStore';

const meta: Meta<typeof AboutBlockAccordion> = {
    title: 'mobileNavBar/AboutBlockAccordion',
    component: AboutBlockAccordion,
};

export default meta;
type Story = StoryObj<typeof AboutBlockAccordion>;

export const Primary: Story = {
    render: () =>

        <Provider store={store}>
            <WrapperIntl>
                <AboutBlockAccordion />
            </WrapperIntl>
        </Provider>

};