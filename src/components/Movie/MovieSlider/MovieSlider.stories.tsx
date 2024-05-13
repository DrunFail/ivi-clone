import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import PageSection from "../../PageContainers/PageSection/PageSection";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";
import MovieSlider from "./MovieSlider";
import { rest } from "msw";
import { MOVIE_SLIDER_LIST } from "../../../mockData/movieSliderList";

const meta: Meta<typeof MovieSlider> = {
  title: "movie/MovieSlider",
  component: MovieSlider,
  decorators: [
    (Story) => (
      <Provider store={store}>
          <PageSection>
            <PageWrapper>
              <Story />
            </PageWrapper>
          </PageSection>
      </Provider>
    ),
  ],
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "http://localhost:5000/api/movies/filters?genreId=1",
          (req, res, ctx) => {
            return res(ctx.json(MOVIE_SLIDER_LIST));
          },
        ),
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MovieSlider>;

export const Primary: Story = {
    render: () => <MovieSlider data={MOVIE_SLIDER_LIST } href="" />,
};
