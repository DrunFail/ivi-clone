import type { Meta, StoryObj } from "@storybook/react";

import ConfirmConfidential from "./ConfirmConfidential";
import { Provider } from "react-redux";
import WrapperIntl from "../../../WrapperIntl/WrapperIntl";
import store from "../../../../store/store";

const meta: Meta<typeof ConfirmConfidential> = {
  title: "auth/ConfirmConfidential",
  component: ConfirmConfidential,
};

export default meta;
type Story = StoryObj<typeof ConfirmConfidential>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
      <WrapperIntl>
        <ConfirmConfidential />
      </WrapperIntl>
    </Provider>
  ),
};
