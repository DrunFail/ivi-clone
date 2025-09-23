import type { Meta, StoryObj } from "@storybook/react";
import MovieSlider from "./MovieSlider";
import { MOVIE_SLIDER_LIST } from "../../../mockData/movieSliderList";

const meta: Meta<typeof MovieSlider> = {
  title: "movie/MovieSlider",
  component: MovieSlider,
};

export default meta;
type Story = StoryObj<typeof MovieSlider>;

export const Primary: Story = {
    args: {
        data: MOVIE_SLIDER_LIST,
        href: "",
    }
};
