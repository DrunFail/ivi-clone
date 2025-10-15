import Image from 'next/image';
import styles from './SocialButton.module.scss';
import vk from '../../../assets/SVG/Messangers/VK.svg';
import twitter from '../../../assets/SVG/Messangers/Twiiter.svg';
import telegram from '../../../assets/SVG/Messangers/Telegram.svg';
import Button from '../core/Button/Button';

const linkVariants = {
    vk: {
        href: 'https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e',
        description: '',
        imageHref: vk,
        name: 'вконтакте',
    },
    twitter: {
        href: 'https://twitter.com/ivi_ru',
        description: '',
        imageHref: twitter,
        name: 'твиттер',
    },
    telegram: {
        href: 'https://t.me/official_iviru',
        description: '',
        imageHref: telegram,
        name: 'телеграм',
    },
};

interface SocialButtonProps {
    variant: keyof typeof linkVariants;
}

export default function SocialButton({ variant }: SocialButtonProps) {
    const { href, description, imageHref, name } = linkVariants[variant];

    return (
        <Button className={styles.button} as="link" href={href} target="_blank" aria-label={`перейти в ${name}`}>
            <Image src={imageHref} alt={description} height={15} width={15} aria-hidden />
        </Button>
    );
}
