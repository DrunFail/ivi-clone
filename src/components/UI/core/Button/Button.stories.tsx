import type { Meta, StoryObj } from '@storybook/react';
import Button from "./Button";
import { Provider } from 'react-redux';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import store from '../../../../store/store';
import { Title, Description, Subtitle, Story, Source, Canvas } from "@storybook/blocks";
import FontIcon from '../../FontIcon/FontIcon';
import { FormattedMessage } from 'react-intl';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    decorators: [
        Story => <Provider store={store}>
            <WrapperIntl>
                <Story />
            </WrapperIntl>
        </Provider>
    ],
    tags: ["autodocs"],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Canvas />

                    <Title>ButtonCall</Title>
                    <Canvas of={ButtonCall} />

                    <Title>ButtonMail</Title>
                    <Canvas of={ButtonMail} />

                    <Title>ButtonWriteChat</Title>
                    <Canvas of={ButtonWriteChat} />

                    <Title>LoginButton</Title>
                    <Canvas of={LoginButton} />

                    <Title>LogoutButton</Title>
                    <Canvas of={LogoutButton} />

                    <Title>ShareButton</Title>
                    <Canvas of={ShareButton} />

                    <Title>ButtonDetails</Title>
                    <Canvas of={ButtonDetails} />

                    <Title>ButtonFreeMovies</Title>
                    <Canvas of={ButtonFreeMovies} />

                    <Title>WatchLaterButton</Title>
                    <Canvas of={WatchLaterButton} />

                    <Title>ButtonClose</Title>
                    <Canvas of={ButtonClose} />

                    <Title>ButtonTrailer</Title>
                    <Canvas of={ButtonTrailer} />

                    <Title>ButtonFormAuthSubmit</Title>
                    <Canvas of={ButtonFormAuthSubmit} />

                    <Title>ButtonFormCancel</Title>
                    <Canvas of={ButtonFormCancel } />
                    
                </>
            )
        }
    }

};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonAsLink: Story = {
    args: {
        as: "link",
        children: "button",
        href: "/ivi",
        color: "red"
    }
}

export const ButtonAsButton: Story = {
    args: {
        as: "button",
        children: "button",


    }
}
export const ButtonCall: Story = {
    args: {
        as: "button",
        children: <FontIcon variant="phone" />,
        size: "mini"
    }
}

export const ButtonMail: Story = {
    args: {
        as: "button",
        children: <FontIcon variant="mail" />,
        size: "mini"
    }
}

export const ButtonWriteChat: Story = {
    args: {
        as: "button",
        children: <FormattedMessage id="WriteInChat" />
    }
}

export const LoginButton: Story = {
    args: {
        as: "link",
        href: "/auth/login",
        color: "red",
        children: <FormattedMessage id="EnterOrRegister" />
    }
}

export const LogoutButton: Story = {
    args: {
        as: "button",
        color: "red",
        children: "Выйти"
    }
}

export const ShareButton: Story = {
    args: {
        as: "button",
        size: "mini",
        children: <FontIcon variant="arrow" />
    }
}
export const ButtonDetails: Story = {
    args: {
        as: "button",
        children: <FormattedMessage id="Detail" />
    }
}

export const ButtonFreeMovies: Story = {
    args: {
        as: "button",
        children:
            <>
                <FontIcon variant="tv" />
                <FormattedMessage
                    id="freeFilm"
                    defaultMessage={"Бесплатные фильмы"}
                />
            </>
    }
}

export const WatchLaterButton: Story = {
    args: {
        as: "button",
        size: "mini",
        children: <FontIcon variant="bookmark2" />
    }
}

export const ButtonClose: Story = {
    args: {
        as: "button",
        onlyImage: true,
        children: <FontIcon variant="close" size={20} />
    }
}
export const ButtonTrailer: Story = {
    args: {
        as: "button",
        children: <FormattedMessage id="trailer" />
    }
}

export const ButtonFormAuthSubmit: Story = {
    args: {
        as: "button",
        type: "submit",
        color: "red",
        children: "Продолжить"
    }
}
export const ButtonFormCancel: Story = {
    args: {
        as: "button",
        type: "button",
        children: <FormattedMessage id="button.cancel" />
    }
}