import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import SearchResultCard from "./SearchResultCard";
import store from "../../../store/store";

const meta: Meta<typeof SearchResultCard> = {
  title: "search/SearchResultCard",
  component: SearchResultCard,
};

export default meta;
type Story = StoryObj<typeof SearchResultCard>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <SearchResultCard
          name={"name"}
          year={2022}
        />
    </Provider>
  ),
};
