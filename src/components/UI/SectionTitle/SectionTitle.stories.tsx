import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import SectionTitle from "./SectionTitle";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof SectionTitle> = {
    title: 'UI/SectionTitle',
    component: SectionTitle,
    decorators: [
        Story => <Provider store={store}>
            <WrapperIntl>
                <Story />
            </WrapperIntl>
        </Provider>
    ],
    args: {children: "text"}
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const Primary: Story = {}
