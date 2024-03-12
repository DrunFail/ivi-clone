import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import PageSection from '../../PageContainers/PageSection/PageSection';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import data from '../mock/mock.json';
import MovieSlider from './MovieSlider';
import { rest } from 'msw'


const meta: Meta<typeof MovieSlider> = {
    title: 'MovieSlider',
    component: MovieSlider,
};

export default meta;
type Story = StoryObj<typeof MovieSlider>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageSection>
                <PageWrapper>
                    <MovieSlider carouselId={"id"} genreId={1}  href="" />
                    </PageWrapper>
                </PageSection>
            </WrapperIntl>
        </Provider>
    ,
};

Primary.parameters = {
    msw: {
        handlers: [
            rest.get('http://localhost:5000/api/movies/filters?genreId=1', (req, res, ctx) => {
                return res(
                    ctx.json(data)
                )
            }),
        ]
    },
}