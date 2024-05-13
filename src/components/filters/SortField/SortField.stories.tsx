import type { Meta, StoryObj } from "@storybook/react";

import SortField from "./SortField";
import { Provider } from "react-redux";
import store from "../../../store/store";

const meta: Meta<typeof SortField> = {
  title: "filters/SortField",
  component: SortField,
};

export default meta;
type Story = StoryObj<typeof SortField>;

const sortHandler = () => console.log("click");
export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <div style={{ inlineSize: "250px" }}>
          <SortField
            setFilterParams={sortHandler}
            filterKey="orderBy"
            currentSortVariant="nameRu"
          />
        </div>
    </Provider>
  ),
};
