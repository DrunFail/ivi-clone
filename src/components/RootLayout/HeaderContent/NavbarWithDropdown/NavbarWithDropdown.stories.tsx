import type { Meta, StoryObj } from '@storybook/nextjs';

import NavbarWithDropdown from './NavbarWithDropdown';
import { NAV_MENU } from '../../../../constants/headerConstants';

const meta: Meta<typeof NavbarWithDropdown> = {
    title: 'header/components/NavbarWithDropdown',
    component: NavbarWithDropdown,
    args: {
        navLinkData: NAV_MENU,
    },
};

export default meta;
type Story = StoryObj<typeof NavbarWithDropdown>;

export const Primary: Story = {};
