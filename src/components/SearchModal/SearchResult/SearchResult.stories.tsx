import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import SearchResult from "./SearchResult";
import store from "../../../store/store";

const meta: Meta<typeof SearchResult> = {
  title: "search/SearchResult",
  component: SearchResult,
};

export default meta;
type Story = StoryObj<typeof SearchResult>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <div style={{ inlineSize: "400px" }}>
                    <SearchResult>
          search result list elems
          </SearchResult>
        </div>
    </Provider>
  ),
};
