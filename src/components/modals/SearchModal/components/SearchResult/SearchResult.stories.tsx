import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import SearchResult from "./SearchResult";
import WrapperIntl from '../../../../WrapperIntl/WrapperIntl';
import store from '../../../../../store/store';

const meta: Meta<typeof SearchResult> = {
    title: 'SearchResult',
    component: SearchResult,
};

export default meta;
type Story = StoryObj<typeof SearchResult>;

const search = [
    { nameRu: "name1", year: "2022", id: 1 },
    { nameRu: "name2", year: "2022", id: 2 },
    { nameRu: "name3", year: "2022", id: 3 },
    { nameRu: "name4", year: "2022", id: 4 },
    { nameRu: "name5", year: "2022", id: 5 },
]


export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <div style={{inlineSize: "400px"} }>
                    <SearchResult search={search} />
                </div>
            </WrapperIntl>
        </Provider>
};