import type { Meta, StoryObj } from "@storybook/react";
import StaffSlider from "./StaffSlider";
import { PERSON_MOCK_DATA } from "../../../mockData/personMockData";

const meta: Meta<typeof StaffSlider> = {
  title: "person/StaffSlider",
  component: StaffSlider,
};

export default meta;
type Story = StoryObj<typeof StaffSlider>;


export const Primary: Story = {
    args: {
        data: PERSON_MOCK_DATA
    }
};
