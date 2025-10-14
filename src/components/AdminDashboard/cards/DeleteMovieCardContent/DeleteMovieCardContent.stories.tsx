import type { Meta, StoryObj } from "@storybook/nextjs";

import DeleteMovieCardContent from "./DeleteMovieCardContent";
import movieSliderMock from "../../../../mockData/movieSliderMock.json";

const meta: Meta<typeof DeleteMovieCardContent> = {
  title: "admin/card/DeleteMovieCardContent",
  component: DeleteMovieCardContent,
};

export default meta;
type Story = StoryObj<typeof DeleteMovieCardContent>;

const elem = movieSliderMock.rows[0];

export const Primary: Story = {
    args: {
        nameRu: elem.nameRu,
        posterUrlPreview: elem.posterUrlPreview
    }
};
