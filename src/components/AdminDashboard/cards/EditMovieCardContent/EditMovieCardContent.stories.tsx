import type { Meta, StoryObj } from "@storybook/react";

import EditMovieCardContent from "./EditMovieCardContent";
import { MOVIE_SINGLE } from "../../../../mockData/movieSingle";

const meta: Meta<typeof EditMovieCardContent> = {
    title: "admin/card/EditMovieCardContent",
    component: EditMovieCardContent,
};

export default meta;
type Story = StoryObj<typeof EditMovieCardContent>;

const newMovieName = {
    nameRu: "nameRu",
    nameOriginal: "nameOriginal",
};

export const Primary: Story = {
    args: {
        countries: "countries",
        genres: "genres",
        handleChangeNewMovieName: () => console.log("change"),
        newMovieName: newMovieName,
        elem: MOVIE_SINGLE
    }
};
