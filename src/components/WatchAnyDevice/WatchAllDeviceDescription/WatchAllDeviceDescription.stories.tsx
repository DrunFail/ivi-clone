import type { Meta, StoryObj } from "@storybook/react";

import WatchAllDeviceDescription from "./WatchAllDeviceDescription";
import { Provider } from "react-redux";
import store from "../../../store/store";

const meta: Meta<typeof WatchAllDeviceDescription> = {
  title: "movie/WatchAnyDevice/WatchAllDeviceDescription",
  component: WatchAllDeviceDescription,
};

export default meta;
type Story = StoryObj<typeof WatchAllDeviceDescription>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <WatchAllDeviceDescription />
    </Provider>
  ),
};
