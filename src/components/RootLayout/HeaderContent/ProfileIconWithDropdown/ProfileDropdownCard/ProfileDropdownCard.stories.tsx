import type { Meta, StoryObj } from '@storybook/nextjs';

import ProfileDropdownCard from './ProfileDropdownCard';
import { PROFILE_IMG_LINK_DATA } from '../imgLinkData';

const data = PROFILE_IMG_LINK_DATA[0];

const meta: Meta<typeof ProfileDropdownCard> = {
    title: 'header/components/ProfileDropdownCard',
    component: ProfileDropdownCard,
    args: {
        variant: data.imgLink,
        children: data.idTranslate,
    },
};

export default meta;
type Story = StoryObj<typeof ProfileDropdownCard>;

export const Primary: Story = {};
