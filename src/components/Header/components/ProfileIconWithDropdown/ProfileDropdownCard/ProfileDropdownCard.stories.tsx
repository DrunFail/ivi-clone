import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import ProfileDropdownCard from "./ProfileDropdownCard";
import WrapperIntl from '../../../../WrapperIntl/WrapperIntl';
import store from '../../../../../store/store';
import { PROFILE_IMG_LINK_DATA } from '../imgLinkData';


const data = PROFILE_IMG_LINK_DATA[0]

const meta: Meta<typeof ProfileDropdownCard> = {
    title: 'header/components/ProfileDropdownCard',
    component: ProfileDropdownCard,
    decorators: [
        Story => 
            <Provider store={store}>
                <WrapperIntl>
                    <Story />
                </WrapperIntl>
            </Provider>
    ],
    args: {
        imgLink: data.imgLink,
        imgDescription: data.imgDescription,
        idTranslate: data.idTranslate
    }
};

export default meta;
type Story = StoryObj<typeof ProfileDropdownCard>;



export const Primary: Story = {};