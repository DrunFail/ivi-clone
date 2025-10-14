import type { Meta, StoryObj } from "@storybook/nextjs";

import GenreListItem from "./GenreListItem";
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
    args: {
        genreItem,
    }
};
