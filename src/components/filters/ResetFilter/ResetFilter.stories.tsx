import type { Meta, StoryObj } from '@storybook/react';

import ResetFilter from "./ResetFilter";
import { Provider } from 'react-redux';
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof ResetFilter> = {
    title: 'filters/ResetFilter',
    component: ResetFilter,
};

export default meta;
type Story = StoryObj<typeof ResetFilter>;

const resetHandler = () => console.log("click")
export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <div style={{ inlineSize: "250px" }}>
                    <ResetFilter variant="genrePage" resetHandler={resetHandler} />

                </div>
            </WrapperIntl>
        </Provider>

    ,
};