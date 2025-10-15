import type { Meta, StoryObj } from '@storybook/nextjs';
import LanguageSwitcher from './LanguageSwitcher';
import store from '../../../store/store';
import { Provider } from 'react-redux';

const meta: Meta<typeof LanguageSwitcher> = {
    title: 'ui/LanguageSwitcher',
    component: LanguageSwitcher,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Primary: Story = {};
