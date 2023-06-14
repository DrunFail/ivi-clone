import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import LogoutButton from "../../../../auth/components/LogoutButton/LogoutButton";
import useAuth from "../../../../auth/hooks/useAuth";
import MyButton from "../../../../UI/MyButton/MyButton";
import { PROFILE_IMG_LINK_DATA } from "../ProfileDropdownCard/imgLinkData";
import ProfileDropdownCard from "../ProfileDropdownCard/ProfileDropdownCard";
import styles from "./ProfileDropdownWindow.module.scss";

export default function ProfileDropdownWindow() {
    const router = useRouter();
    const auth= useAuth()?.auth;
    return (
        <div className={styles.container}>
            <div className={styles.cardBlock}>
                {PROFILE_IMG_LINK_DATA.map(card =>
                    <ProfileDropdownCard
                        key={card.id}
                        imgLink={card.imgLink}
                        imgDescription={card.imgDescription}
                        idTranslate={card.idTranslate} />
                )}
               
            </div>
            <div className={styles.authButton}>
                {auth?.token
                    ? <LogoutButton />

                    : <MyButton
                        style={{inlineSize: "100%"} }
                        type="button"
                        bg_color="pink"
                        size="large"
                        onClick={() => router.push('/auth/login')}
                    >
                        <FormattedMessage id="EnterOrRegister" />
                    </MyButton>}
            </div>
        </div>
    );
};
