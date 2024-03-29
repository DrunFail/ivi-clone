import type { Meta, StoryObj } from "@storybook/react";

import RangeInput from "./RangeInput";
import { ChangeEvent } from "react";

const meta: Meta<typeof RangeInput> = {
  title: "ui/RangeInput",
  component: RangeInput,
};

export default meta;
type Story = StoryObj<typeof RangeInput>;

const rangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
  console.log("change");

export const Primary: Story = {
  render: () => (
    <div style={{ inlineSize: "300px" }}>
      <RangeInput
        inputId={"test"}
        initValue={50}
        min={0}
        max={100}
        step={10}
        changeHandler={rangeHandler}
      />
    </div>
  ),
};
