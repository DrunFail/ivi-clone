import type { Meta, StoryObj } from "@storybook/nextjs";

import ShareModal from "./ShareModal";

const meta: Meta<typeof ShareModal> = {
  title: "modals/ShareModal",
  component: ShareModal,
};

export default meta;
type Story = StoryObj<typeof ShareModal>;

export const Primary: Story = {
    args: {
        visible: true,
        isModalClose: () => console.log("close"),
        movieDuration: "25",
        movieName: "movieName",
        movieYear: 2022,
        urlMovieImage: ""
    }
};
