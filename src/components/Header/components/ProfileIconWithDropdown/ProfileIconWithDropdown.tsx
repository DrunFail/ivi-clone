import Image from "next/image";
import user from "../../../../assets/SVG/Users/User.svg";
import styles from "./ProfileIconWithDropdown.module.scss";
import { useEffect, useState } from "react";
import HeaderPortal from "../../portal/HeaderPortal";
import HeaderPortalWrapper from "../../portal/HeaderPortalWrapper/HeaderPortalWrapper";
import ProfileDropdownWindow from "./ProfileDropdownWindow/ProfileDropdownWindow";
import { UserAPI } from "../../../../api/UserAPI";
import useAxiosAuth from "../../../auth/hooks/useAxiosAuth";
import useAuth from "../../../auth/hooks/useAuth";
import { AuthContextData } from "../../../auth/context/interfaces";

interface ProfileBlockIconWithDropdownProps {
    handlerHeaderHover: (status: boolean) => void
}
export default function ProfileBlockIconWithDropdown({ handlerHeaderHover }: ProfileBlockIconWithDropdownProps) {
    const [isVisiblePortal, setIsVisiblePortal] = useState(false);
    const axios = useAxiosAuth()
    const { auth, setAuth } = useAuth();
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await UserAPI.getUserProfileData(axios)
                console.log(response.data)
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
        handlerHeaderHover(status)
    }


    return (
        <div
            className={styles.container}
            onMouseLeave={() => handleVisibleProfileDropdown(false)}
            onMouseEnter={() => handleVisibleProfileDropdown(true)}
            data-testid="profile-dropdown"
        >
            {auth.token ? "U" : <Image src={user} alt="" width={25} height={25} />}


            {isVisiblePortal &&
                <HeaderPortal>
                    <HeaderPortalWrapper>
                        <ProfileDropdownWindow />
                    </HeaderPortalWrapper>
                </HeaderPortal>

            }


        </div>
    );
}