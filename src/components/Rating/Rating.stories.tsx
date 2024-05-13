import type { Meta, StoryObj } from "@storybook/react";
import PageWrapper from "../PageContainers/PageWrapper/PageWrapper";

import Rating from "./Rating";
import { Provider } from "react-redux";
import store from "../../store/store";

const meta: Meta<typeof Rating> = {
  title: "ui/rating/Rating",
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Large: Story = {
  render: () => (
    <Provider store={store}>
        <PageWrapper>
          <Rating variant="large" movieRating={8} />
        </PageWrapper>
    </Provider>
  ),
};
export const Small: Story = {
  render: () => (
    <Provider store={store}>
        <PageWrapper>
          <Rating variant="small" movieRating={4} />
        </PageWrapper>
    </Provider>
  ),
};
