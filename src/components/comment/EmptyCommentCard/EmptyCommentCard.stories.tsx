import type { Meta, StoryObj } from "@storybook/react";

import EmptyCommentCard from "./EmptyCommentCard";
import store from "../../../store/store";
import { Provider } from "react-redux";

const meta: Meta<typeof EmptyCommentCard> = {
  title: "comment/EmptyCommentCard",
  component: EmptyCommentCard,
};

export default meta;
type Story = StoryObj<typeof EmptyCommentCard>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <EmptyCommentCard variant="list" />
    </Provider>
  ),
};
