import type { Meta, StoryObj } from "@storybook/react";

import GenreListItem from "./GenreListItem";
import { Provider } from "react-redux";
import store from "../../../store/store";
import WrapperIntl from "../../WrapperIntl/WrapperIntl";
import { Genre } from "../../../models/types";

const meta: Meta<typeof GenreListItem> = {
  title: "admin/GenreListItem",
  component: GenreListItem,
};

export default meta;
type Story = StoryObj<typeof GenreListItem>;

const genreItem: Genre = {
  id: 1,
  genreNameRu: "genre",
  genreNameEng: "genre",
};

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
      <WrapperIntl>
        <GenreListItem genreItem={genreItem} />
      </WrapperIntl>
    </Provider>
  ),
};
