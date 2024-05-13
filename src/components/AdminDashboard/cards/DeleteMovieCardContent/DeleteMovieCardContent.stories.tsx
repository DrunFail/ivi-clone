import type { Meta, StoryObj } from "@storybook/react";

import DeleteMovieCardContent from "./DeleteMovieCardContent";
import { Provider } from "react-redux";
import store from "../../../../store/store";
import movieSliderMock from "../../../../mockData/movieSliderMock.json";

const meta: Meta<typeof DeleteMovieCardContent> = {
  title: "admin/card/DeleteMovieCardContent",
  component: DeleteMovieCardContent,
};

export default meta;
type Story = StoryObj<typeof DeleteMovieCardContent>;

const elem = movieSliderMock.rows[0];

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <DeleteMovieCardContent
          posterUrlPreview={elem.posterUrlPreview}
          nameRu={elem.nameRu}
        />
    </Provider>
  ),
};
