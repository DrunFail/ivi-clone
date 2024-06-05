"use client";

import styles from "./ProfileIconWithDropdown.module.scss";
import { useState } from "react";
import useAuth from "../../../../hooks/auth/useAuth";
import HeaderPortal from "../portal/HeaderPortal";
import HeaderPortalWrapper from "../portal/HeaderPortalWrapper/HeaderPortalWrapper";
import { useResize } from "../../../../hooks/useResize";
import { usePathname } from "../../../../navigation";
import { AuthContextData } from "../../../auth/context/interfaces";

interface ProfileBlockIconWithDropdownProps {
    dropdownContent: React.ReactNode;
    userProfileData: any;
    children: React.ReactNode
}


export default function ProfileBlockIconWithDropdown({ dropdownContent, userProfileData,children }: ProfileBlockIconWithDropdownProps) {
    const [isVisiblePortal, setIsVisiblePortal] = useState(false);
    const { setAuth, auth } = useAuth();
    const size = useResize();
    const isHiddenProfileDropdown = size && (size > 1050);
    const path = usePathname();

    const handleVisibleProfileDropdown = (status: boolean) => {
        setIsVisiblePortal(status)

    }

    if (userProfileData && !auth.profile) {
        /* eslint-disable */
        //@ts-ignore
        setAuth((prevAuth: AuthContextData) => {
            return { ...prevAuth, profile: userProfileData };
        })
    }

    
    return (
        <div
            className={styles.container}
            onMouseLeave={() => handleVisibleProfileDropdown(false)}
            onMouseEnter={() => handleVisibleProfileDropdown(true)}
            data-testid="profile-dropdown"
        >
            {children}

            {isVisiblePortal && isHiddenProfileDropdown &&
                <HeaderPortal>
                    <HeaderPortalWrapper>
                        {dropdownContent}
                    </HeaderPortalWrapper>
                </HeaderPortal>
            }
        </div>
    );
}