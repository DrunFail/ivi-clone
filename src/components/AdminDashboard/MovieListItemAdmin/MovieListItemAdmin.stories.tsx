import type { Meta, StoryObj } from "@storybook/react";

import MovieListItemAdmin from "./MovieListItemAdmin";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { MOVIE_SINGLE } from "../../../mockData/movieSingle";

const meta: Meta<typeof MovieListItemAdmin> = {
  title: "admin/MovieListItemAdmin",
  component: MovieListItemAdmin,
};

export default meta;
type Story = StoryObj<typeof MovieListItemAdmin>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <div style={{ inlineSize: "200px" }}>
          <MovieListItemAdmin elem={MOVIE_SINGLE} />
        </div>
    </Provider>
  ),
};
