import type { Meta, StoryObj } from "@storybook/react";
import RangeFilter from "./RangeFilter";

const meta: Meta<typeof RangeFilter> = {
    title: "filters/RangeFilter",
    component: RangeFilter,
    decorators: [
        (Story) =>
            <div style={{ inlineSize: "250px" }}>
                <Story />
            </div>
    ]
};

export default meta;
type Story = StoryObj<typeof RangeFilter>;

const rangeHandler = () => console.log("click");
export const Primary: Story = {
    args: {
        min: 0,
        max: 100,
        step: 10,
        filterKey: "ratingKinopoisk",
        initValue: 30,
        setFilterParams: rangeHandler,
    }
};
