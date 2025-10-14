import type { Meta, StoryObj } from "@storybook/nextjs";

import DropdownFilter from "./DropdownFilter";


const TEST_VARIANTS = [
    { name: "option1", id: 1 },
    { name: "option2", id: 2 },
    { name: "option3", id: 3 },
    { name: "option4", id: 4 },
    { name: "option5", id: 5 },
    { name: "option6", id: 6 },
    { name: "option7", id: 7 },
    { name: "option8", id: 8 },
    { name: "option9", id: 9 },
    { name: "option10", id: 10 },
]



const meta: Meta<typeof DropdownFilter> = {
    title: "filters/DropdownFilter",
    component: DropdownFilter,
    args: {
        filterKey: "FilterKey",
        variants: TEST_VARIANTS,
        defaultValue: 1,
        filterName: "FilterName",
        isSetCurrentValue: true,
        selectedValue: TEST_VARIANTS[0].name
    },
    decorators: [
        (Story) => (
            <div style={{ inlineSize: "350px", position: "relative" }}>
                <Story />
            </div>
        ),
    ]
};

export default meta;
type Story = StoryObj<typeof DropdownFilter>;

export const Primary: Story = {};