import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";

import ServiceBlockAccordion from "./ServiceBlockAccordion";
import store from "../../../../../../store/store";
import WrapperIntl from "../../../../../WrapperIntl/WrapperIntl";

const meta: Meta<typeof ServiceBlockAccordion> = {
  title: "mobileNavBar/ServiceBlockAccordion",
  component: ServiceBlockAccordion,
};

export default meta;
type Story = StoryObj<typeof ServiceBlockAccordion>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
      <WrapperIntl>
        <ServiceBlockAccordion />
      </WrapperIntl>
    </Provider>
  ),
};
