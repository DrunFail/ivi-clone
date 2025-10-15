import type { Meta, StoryObj } from '@storybook/nextjs';
import AccordionItem from './AccordionItem';

const meta: Meta<typeof AccordionItem> = {
    title: 'ui/AccordionItem/AccordionItem',
    component: AccordionItem,
    args: {
        heading: 'accordion',
        content: 'accordion content',
        headingVariant: 'content',
    },
};

export default meta;
type Story = StoryObj<typeof AccordionItem>;

export const Primary: Story = {};
