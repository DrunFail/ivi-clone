import type { Meta, StoryObj } from "@storybook/react";

import WatchAnyDevice from "./WatchAnyDevice";
import { Provider } from "react-redux";
import store from "../../store/store";

const meta: Meta<typeof WatchAnyDevice> = {
  title: "movie/WatchAnyDevice/WatchAnyDevice",
  component: WatchAnyDevice,
};

export default meta;
type Story = StoryObj<typeof WatchAnyDevice>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <WatchAnyDevice movieName="movieName" moviePosterUrl="./film.jpg" />
    </Provider>
  ),
};
