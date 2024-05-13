import type { Meta, StoryObj } from "@storybook/react";

import RangeFilter from "./RangeFilter";
import { Provider } from "react-redux";
import store from "../../../store/store";

const meta: Meta<typeof RangeFilter> = {
  title: "filters/RangeFilter",
  component: RangeFilter,
};

export default meta;
type Story = StoryObj<typeof RangeFilter>;

const rangeHandler = () => console.log("click");
export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <div style={{ inlineSize: "250px" }}>
          <RangeFilter
            min={0}
            max={100}
            step={10}
            filterKey={"ratingKinopoisk"}
            initValue={30}
            setFilterParams={rangeHandler}
          />
        </div>
    </Provider>
  ),
};
