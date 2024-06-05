import type { Meta, StoryObj } from "@storybook/react";
import SortField from "./SortField";

const meta: Meta<typeof SortField> = {
    title: "filters/SortField",
    component: SortField,
    decorators: [
        (Story) =>
            <div style={{ inlineSize: "250px" }}>
                <Story />
            </div>
    ]
};

export default meta;
type Story = StoryObj<typeof SortField>;

const sortHandler = () => console.log("click");
export const Primary: Story = {
    args: {
        setFilterParams: sortHandler,
        filterKey: "orderBy",
        currentSortVariant: "nameRu",
    }
};
