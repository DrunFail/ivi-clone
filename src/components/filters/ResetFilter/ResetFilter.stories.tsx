import type { Meta, StoryObj } from "@storybook/react";
import ResetFilter from "./ResetFilter";

const meta: Meta<typeof ResetFilter> = {
  title: "filters/ResetFilter",
  component: ResetFilter,
    decorators: [
        (Story) => 
            <div style={{ inlineSize: "250px" }}>
                <Story />
            </div>
    ]
};

export default meta;
type Story = StoryObj<typeof ResetFilter>;

const resetHandler = () => console.log("click");
export const Primary: Story = {
    args: {
        variant: "genrePage",
        resetHandler: resetHandler,
    }
};
