import type { Meta, StoryObj } from '@storybook/react';
import PageSection from '../PageContainers/PageSection/PageSection';
import PageWrapper from '../PageContainers/PageWrapper/PageWrapper';

import PromoSection from "./PromoSection";

const meta: Meta<typeof PromoSection> = {
    title: 'PromoSection',
    component: PromoSection,
};

export default meta;
type Story = StoryObj<typeof PromoSection>;

export const Primary: Story = {
    render: () =>
        <PageSection>
            <PageWrapper>
            <PromoSection />
            </PageWrapper>
        </PageSection>


};