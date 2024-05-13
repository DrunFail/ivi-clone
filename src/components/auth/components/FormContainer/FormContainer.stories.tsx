import type { Meta, StoryObj } from "@storybook/react";

import FormContainer from "./FormContainer";
import { Provider } from "react-redux";
import PageWrapper from "../../../PageContainers/PageWrapper/PageWrapper";
import store from "../../../../store/store";

const meta: Meta<typeof FormContainer> = {
  title: "auth/FormContainer",
  component: FormContainer,
};

export default meta;
type Story = StoryObj<typeof FormContainer>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <PageWrapper>
          <FormContainer>form fields</FormContainer>
        </PageWrapper>
    </Provider>
  ),
};
