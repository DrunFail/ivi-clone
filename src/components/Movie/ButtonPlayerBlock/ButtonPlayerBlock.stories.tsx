import type { Meta, StoryObj } from '@storybook/react';

import ButtonPlayerBlock from "./ButtonPlayerBlock";
import store from '../../../store/store';
import { Provider } from 'react-redux';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof ButtonPlayerBlock> = {
    title: 'buttons/ButtonPlayerBlock',
    component: ButtonPlayerBlock,
};

export default meta;
type Story = StoryObj<typeof ButtonPlayerBlock>;

export const Desktop: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonPlayerBlock
                    variant="desktop"
                    movieName=""
                    moviePosterUrl=""
                    movieYear={2022}
                />
            </WrapperIntl>
        </Provider>

    ,
};
export const Tablet: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <div style={{inlineSize: "600px"} }>
                    <ButtonPlayerBlock
                        variant="tablet"
                        movieName=""
                        moviePosterUrl=""
                        movieYear={2022}
                    />
                </div>
            </WrapperIntl>
        </Provider>

    ,
};
export const Mobile: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonPlayerBlock
                    variant="mobile"
                    movieName=""
                    moviePosterUrl=""
                    movieYear={2022}
                />
            </WrapperIntl>
        </Provider>

    ,
};