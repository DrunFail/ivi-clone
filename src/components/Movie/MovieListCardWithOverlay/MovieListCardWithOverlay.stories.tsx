import type { Meta, StoryObj } from "@storybook/react";

import MovieListCardWithOverlay from "./MovieListCardWithOverlay";
import { Provider } from "react-redux";
import store from "../../../store/store";

const meta: Meta<typeof MovieListCardWithOverlay> = {
  title: "movie/MovieListCardWithOverlay",
  component: MovieListCardWithOverlay,
  decorators: [
    (Story) => (
      <Provider store={store}>
          <div style={{ inlineSize: "350px" }}>
            <Story />
          </div>
      </Provider>
    ),
  ],
  args: {
    overlayMovieData: {
      rating: ["5", "4"],
      duration: "120 минут",
      infoProduct: "info",
      mainRatingPercentage: 58,
    },
    modifiedMovieData: {
      movieName: "movie",
      moviePoster: "./film.jpg",
    },
  },
};

export default meta;
type Story = StoryObj<typeof MovieListCardWithOverlay>;

export const Primary: Story = {};
