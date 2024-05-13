import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import SearchModal from "./SearchModal";
import store from "../../store/store";
import WrapperIntl from "../WrapperIntl/WrapperIntl";

const meta: Meta<typeof SearchModal> = {
  title: "search/SearchModal",
  component: SearchModal,
};

export default meta;
type Story = StoryObj<typeof SearchModal>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
      <WrapperIntl>
        <SearchModal
        />
      </WrapperIntl>
    </Provider>
  ),
};
