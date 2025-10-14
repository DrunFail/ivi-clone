import type { Meta, StoryObj } from "@storybook/nextjs";

import MovieListItemAdmin from "./MovieListItemAdmin";
import { MOVIE_SINGLE } from "../../../mockData/movieSingle";

const meta: Meta<typeof MovieListItemAdmin> = {
  title: "admin/MovieListItemAdmin",
    component: MovieListItemAdmin,
    decorators: [
        (Story) => 
            <div style={{ inlineSize: "200px" }}>
                <Story />
            </div>
  ]
};

export default meta;
type Story = StoryObj<typeof MovieListItemAdmin>;

export const Primary: Story = {
    args: {
        elem: MOVIE_SINGLE
    }
};
