import type { Meta, StoryObj } from '@storybook/react';
import PageSection from '../../PageContainers/PageSection/PageSection';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';
import { TOP_10_DATA } from './data';

import TopTenSlider from "./TopTenSlider";

const meta: Meta<typeof TopTenSlider> = {
    title: 'TopTenSlider',
    component: TopTenSlider,
};

export default meta;
type Story = StoryObj<typeof TopTenSlider>;

export const Primary: Story = {
    render: () =>
        <PageSection>
        <PageWrapper>
                <TopTenSlider count={10} carouselId={"top10"} data={TOP_10_DATA} />
            </PageWrapper>
        </PageSection>,
};