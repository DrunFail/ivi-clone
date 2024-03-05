import type { Meta, StoryObj } from '@storybook/react';

import OverlayMovieListCard from "./OverlayMovieListCard";
import { Provider } from 'react-redux';
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof OverlayMovieListCard> = {
    title: 'movie/OverlayMovieListCard',
    component: OverlayMovieListCard,
    decorators: [
        Story =>
            <Provider store={store}>
                <WrapperIntl>
                    <div style={{ inlineSize: "350px",blockSize: "600px", position:"relative" }}>
                        <Story />
                    </div>
                </WrapperIntl>
            </Provider>
    ],
    args: {
        overlayMovieData: {
            rating: ["5", "4"],
            duration: "120 минут",
            infoProduct: "info",
            mainRatingPercentage: 58
        },
        icons: "icons"
    }
};

export default meta;
type Story = StoryObj<typeof OverlayMovieListCard>;

export const Primary: Story = {}