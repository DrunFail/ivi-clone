import type { Meta, StoryObj } from '@storybook/react';
import { Title, Canvas } from "@storybook/blocks";

import PropertyItem from "./PropertyItem";
import { Provider } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof PropertyItem> = {
    title: 'admin/PropertyItem',
    component: PropertyItem,
    decorators: [
        Story => <Provider store={store}>
            <WrapperIntl>
                <div style={{ backgroundColor: "#100e19" }}>
                    <Story />
                </div>
            </WrapperIntl>
        </Provider>
    ],
    tags: ["autodocs"],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>PropertyItemId</Title>
                    <Canvas of={PropertyItemId} />

                    <Title>PropertyItemMovieYear</Title>
                    <Canvas of={PropertyItemMovieYear} />

                    <Title>PropertyItemRating</Title>
                    <Canvas of={PropertyItemRating} />

                    <Title>PropertyItemCountries</Title>
                    <Canvas of={PropertyItemCountries} />

                    <Title>PropertyItemMovieDuration</Title>
                    <Canvas of={PropertyItemMovieDuration} />

                    <Title>PropertyItemGenres</Title>
                    <Canvas of={PropertyItemGenres} />

                    <Title>PropertyItemCurrentNameRu</Title>
                    <Canvas of={PropertyItemCurrentNameRu} />

                    <Title>PropertyItemCurrentNameEng</Title>
                    <Canvas of={PropertyItemCurrentNameEng} />
                </>
            )


        }
    }
};

export default meta;
type Story = StoryObj<typeof PropertyItem>;


export const PropertyItemId: Story = {
    args: {
        children: <FormattedMessage id="movie.kinopoiskId" />,
        description: "value"
    }
};
export const PropertyItemMovieYear: Story = {
    args: {
        children: <FormattedMessage id="movie.year" />,
        description: "value"
    }
}
export const PropertyItemRating: Story = {
    args: {
        children: <FormattedMessage id="movie.rating" />,
        description: "value"
    }
}
export const PropertyItemCountries: Story = {
    args: {
        children: <FormattedMessage id="movie.countries" />,
        description: "value"
    }
}
export const PropertyItemMovieDuration: Story = {
    args: {
        children: <FormattedMessage id="movie.length" />,
        description: "value"
    }
}
export const PropertyItemGenres: Story = {
    args: {
        children: <FormattedMessage id="movie.genres" />,
        description: "value"
    }
}

export const PropertyItemCurrentNameRu: Story = {
    args: {
        children: <FormattedMessage id="movie.currentNameRu" />,
        description: "value"
    }
}

export const PropertyItemCurrentNameEng: Story = {
    args: {
        children: <FormattedMessage id="movie.currentNameEng" />,
        description: "value"
    }
}