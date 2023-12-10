import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import ButtonSocialBlock from "./ButtonSocialBlock";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof ButtonSocialBlock> = {
    title: 'ButtonSocialBlock',
    component: ButtonSocialBlock,
};

export default meta;
type Story = StoryObj<typeof ButtonSocialBlock>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonSocialBlock />
            </WrapperIntl>
        </Provider>
};