import type { Meta, StoryObj } from "@storybook/react";
import StaffSlider from "./StaffSlider";
import { Provider } from "react-redux";
import store from "../../../store/store";
import WrapperIntl from "../../WrapperIntl/WrapperIntl";
import PageSection from "../../PageContainers/PageSection/PageSection";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";
import { PERSON_MOCK_DATA } from "../../../mockData/personMockData";

const meta: Meta<typeof StaffSlider> = {
  title: "person/StaffSlider",
  component: StaffSlider,
};

export default meta;
type Story = StoryObj<typeof StaffSlider>;

const callback = () => console.log("click");

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
      <WrapperIntl>
        <PageSection>
          <PageWrapper>
            <StaffSlider data={PERSON_MOCK_DATA} callback={callback} />
          </PageWrapper>
        </PageSection>
      </WrapperIntl>
    </Provider>
  ),
};
