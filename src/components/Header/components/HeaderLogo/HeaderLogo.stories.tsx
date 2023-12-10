import type { Meta, StoryObj } from '@storybook/react';
import HeaderLogo from "./HeaderLogo";
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof HeaderLogo> = {
    title: 'header/components/HeaderLogo',
    component: HeaderLogo,
};

export default meta;
type Story = StoryObj<typeof HeaderLogo>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const link = canvas.getByRole('link')
        await expect(link).toHaveAttribute('href','/')
    }
}