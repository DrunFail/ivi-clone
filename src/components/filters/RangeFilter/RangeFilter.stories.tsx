import type { Meta, StoryObj } from '@storybook/react';

import RangeFilter from "./RangeFilter";
import { Provider } from 'react-redux';
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof RangeFilter> = {
    title: 'filters/RangeFilter',
    component: RangeFilter,
};

export default meta;
type Story = StoryObj<typeof RangeFilter>;

const rangeHandler = () => console.log("click")
export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <div style={{inlineSize: "250px"} }>
                    <RangeFilter min={0} max={100} step={10} testId={'test'} initValue={30} testHandler={rangeHandler} />

                </div>
            </WrapperIntl>
        </Provider>

    ,
};