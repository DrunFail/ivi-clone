import type { Meta, StoryObj } from '@storybook/nextjs';
import { Provider } from 'react-redux';
import SectionTitle from './SectionTitle';
import store from '../../../store/store';

const meta: Meta<typeof SectionTitle> = {
    title: 'UI/SectionTitle',
    component: SectionTitle,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
    args: { children: 'text' },
};

export default meta;
type Story = StoryObj<typeof SectionTitle>;

export const Primary: Story = {};
