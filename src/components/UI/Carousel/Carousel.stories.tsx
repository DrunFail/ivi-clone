import type { Meta, StoryObj } from "@storybook/react";
import { Title, Canvas } from "@storybook/blocks";

import Carousel from "./Carousel";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { MOVIE_LIST_SIZES } from "../../../constants/sliderItemSize";
import MovieListCardWithOverlayContainer from "../../Movie/MovieListCardContainer/MovieListCardWithOverlayContainer";
import { MOVIE_SLIDER_LIST } from "../../../mockData/movieSliderList";
import MovieListItemAdmin from "../../AdminDashboard/MovieListItemAdmin/MovieListItemAdmin";

const meta: Meta<typeof Carousel> = {
  title: "ui/Carousel",
  component: Carousel,
  decorators: [
    (Story) => (
      <Provider store={store}>
          <div style={{ backgroundColor: "#100e19" }}>
            <Story />
          </div>
      </Provider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>MovieListAdmin</Title>
          <Canvas of={MovieListAdmin} />

          <Title>MovieListUser</Title>
          <Canvas of={MovieListUser} />
        </>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
  render: () => (
    <Carousel
      mode={"list"}
      data={MOVIE_SLIDER_LIST.rows}
      count={MOVIE_SLIDER_LIST.count}
      sizes={MOVIE_LIST_SIZES}
      component={MovieListCardWithOverlayContainer}
    />
  ),
};

export const MovieListAdmin: Story = {
  render: () => (
    <Carousel
      mode={"list"}
      data={MOVIE_SLIDER_LIST.rows}
      count={MOVIE_SLIDER_LIST.count}
      sizes={MOVIE_LIST_SIZES}
      component={MovieListItemAdmin}
    />
  ),
};

export const MovieListUser: Story = {
  render: () => (
    <Carousel
      component={MovieListCardWithOverlayContainer}
      mode={"list"}
      data={MOVIE_SLIDER_LIST.rows}
      count={MOVIE_SLIDER_LIST.count}
      sizes={MOVIE_LIST_SIZES}
      showMoreHandler={() => "show more"}
    />
  ),
};
