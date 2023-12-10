import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import WatchMoviesLink from "./WatchMoviesLink";
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import store from '../../../store/createStore';

const meta: Meta<typeof WatchMoviesLink> = {
    title: 'footer/components/WatchMoviesLink',
    component: WatchMoviesLink,
    decorators: [
        Story =>
            <Provider store={store}>
                <WrapperIntl>
                    <Story />
                </WrapperIntl>
            </Provider>
    ]
};

export default meta;
type Story = StoryObj<typeof WatchMoviesLink>;

export const Primary: Story = {};