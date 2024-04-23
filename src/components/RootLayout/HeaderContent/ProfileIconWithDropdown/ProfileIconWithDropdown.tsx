import styles from "./ProfileIconWithDropdown.module.scss";
import { useEffect, useState } from "react";
import ProfileDropdownWindow from "./ProfileDropdownWindow/ProfileDropdownWindow";
import useAxiosAuth from "../../../../hooks/auth/useAxiosAuth";
import useAuth from "../../../../hooks/auth/useAuth";
import { UserAPI } from "../../../../api/UserAPI";
import Button from "../../../UI/core/Button/Button";
import FontIcon from "../../../UI/FontIcon/FontIcon";
import HeaderPortal from "../portal/HeaderPortal";
import HeaderPortalWrapper from "../portal/HeaderPortalWrapper/HeaderPortalWrapper";
import { useResize } from "../../../../hooks/useResize";

interface ProfileBlockIconWithDropdownProps {
}
export default function ProfileBlockIconWithDropdown({ }: ProfileBlockIconWithDropdownProps) {
    const [isVisiblePortal, setIsVisiblePortal] = useState(false);
    const axios = useAxiosAuth()
    const { auth, setAuth } = useAuth();
    const size = useResize();
    const isHiddenProfileDropdown = size > 1050;

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await UserAPI.getUserProfileData(axios)
                /* eslint-disable */
                //@ts-ignore
                setAuth((prevAuth: AuthContextData) => {
                    return { ...prevAuth, profile: response.data };
                })
            }
            catch (error) {
                console.log(error)
            }

        }
        getUser()
    }, [])

    const handleVisibleProfileDropdown = (status: boolean) => {
        setIsVisiblePortal(status)
        
    }


    return (
        <div
            className={styles.container}
            onMouseLeave={() => handleVisibleProfileDropdown(false)}
            onMouseEnter={() => handleVisibleProfileDropdown(true)}
            data-testid="profile-dropdown"
        >
            {auth.token
                ? <Button className={styles.profile}>
                    <div>U</div>
                <span>user</span>
                </Button>
                : <Button as="link" href="/auth/login" className={styles.profile}>
                    <FontIcon variant="avatar" />
                    <span>Войти</span>
                </Button>
            }


            {isVisiblePortal && isHiddenProfileDropdown &&
                <HeaderPortal>
                    <HeaderPortalWrapper>
                        <ProfileDropdownWindow />
                    </HeaderPortalWrapper>
                </HeaderPortal>

            }


        </div>
    );
}