import type { Meta, StoryObj } from "@storybook/react";

import CommentSlider from "./CommentSlider";
import store from "../../../store/store";
import { Provider } from "react-redux";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";

const meta: Meta<typeof CommentSlider> = {
  title: "comment/CommentSlider",
  component: CommentSlider,
};

export default meta;
type Story = StoryObj<typeof CommentSlider>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <PageWrapper>
          <CommentSlider
            commentData={{
              count: 0,
              rows: [],
            }}
            movieName={""}
            movieId={0}
          />
        </PageWrapper>
    </Provider>
  ),
};
