import type { Meta, StoryObj } from "@storybook/react";

import WatchAllDeviceTitle from "./WatchAllDeviceTitle";
import { Provider } from "react-redux";
import store from "../../../store/store";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";

const meta: Meta<typeof WatchAllDeviceTitle> = {
  title: "movie/WatchAnyDevice/WatchAllDeviceTitle",
  component: WatchAllDeviceTitle,
};

export default meta;
type Story = StoryObj<typeof WatchAllDeviceTitle>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <PageWrapper>
          <WatchAllDeviceTitle movieName={"movieName"} />
        </PageWrapper>
    </Provider>
  ),
};
