import type { Meta, StoryObj } from "@storybook/react";

import RootLayout from "./RootLayout";
import { Provider } from "react-redux";
import store from "../../store/store";

const meta: Meta<typeof RootLayout> = {
  title: "layouts/RootLayout",
  component: RootLayout,
};

export default meta;
type Story = StoryObj<typeof RootLayout>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <RootLayout>
          <div
            style={{
              paddingBlock: "100px",
              fontSize: "40px",
              backgroundColor: "grey",
            }}
          >
            content
          </div>
        </RootLayout>
    </Provider>
  ),
};
