import type { Meta, StoryObj } from "@storybook/react";

import ButtonPlayerBlock from "./ButtonPlayerBlock";
import store from "../../../store/store";
import { Provider } from "react-redux";

const meta: Meta<typeof ButtonPlayerBlock> = {
  title: "movie/ButtonPlayerBlock",
  component: ButtonPlayerBlock,
};

export default meta;
type Story = StoryObj<typeof ButtonPlayerBlock>;

export const Desktop: Story = {
  render: () => (
    <Provider store={store}>
        <ButtonPlayerBlock
          variant="desktop"
          movieName=""
          moviePosterUrl=""
          movieYear={2022}
        />
    </Provider>
  ),
};
export const Tablet: Story = {
  render: () => (
    <Provider store={store}>
        <div style={{ inlineSize: "600px" }}>
          <ButtonPlayerBlock
            variant="tablet"
            movieName=""
            moviePosterUrl=""
            movieYear={2022}
          />
        </div>
    </Provider>
  ),
};
export const Mobile: Story = {
  render: () => (
    <Provider store={store}>
        <ButtonPlayerBlock
          variant="mobile"
          movieName=""
          moviePosterUrl=""
          movieYear={2022}
        />
    </Provider>
  ),
};
