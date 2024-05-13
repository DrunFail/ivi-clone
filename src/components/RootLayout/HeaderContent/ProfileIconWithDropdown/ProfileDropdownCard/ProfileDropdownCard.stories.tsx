import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import ProfileDropdownCard from "./ProfileDropdownCard";
import { PROFILE_IMG_LINK_DATA } from "../imgLinkData";
import WrapperIntl from "../../../../WrapperIntl/WrapperIntl";
import store from "../../../../../store/store";

const data = PROFILE_IMG_LINK_DATA[0];

const meta: Meta<typeof ProfileDropdownCard> = {
  title: "header/components/ProfileDropdownCard",
  component: ProfileDropdownCard,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <WrapperIntl>
          <Story />
        </WrapperIntl>
      </Provider>
    ),
  ],
  args: {
    variant: data.imgLink,
    children: data.idTranslate
  },
};

export default meta;
type Story = StoryObj<typeof ProfileDropdownCard>;

export const Primary: Story = {};
