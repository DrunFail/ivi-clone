"use client";

import styles from "./ProfileIconWithDropdown.module.scss";
import { useState } from "react";
import useAuth from "../../../../hooks/auth/useAuth";
import HeaderPortal from "../portal/HeaderPortal";
import HeaderPortalWrapper from "../portal/HeaderPortalWrapper/HeaderPortalWrapper";
import { useResize } from "../../../../hooks/useResize";
import Button from "@/components/UI/core/Button/Button";
import SetCookierForRedirectAfterLogin from "@/components/RootLayout/SetCookierForRedirectAfterLogin/SetCookierForRedirectAfterLogin";
import FontIcon from "@/components/UI/FontIcon/FontIcon";

interface ProfileBlockIconWithDropdownProps {
    dropdownContent: React.ReactNode;
    children: React.ReactNode
}


export default function ProfileBlockIconWithDropdown({ dropdownContent }: ProfileBlockIconWithDropdownProps) {
    const [isVisiblePortal, setIsVisiblePortal] = useState(false);
    const { auth } = useAuth();
    const size = useResize();
    const isHiddenProfileDropdown = size && (size > 1050);

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
            {auth
                ? <Button className={styles.profile}>
                    <div>U</div>
                    <span>user</span>
                </Button>
                : <SetCookierForRedirectAfterLogin>
                    <Button
                        as="link"
                        href="/auth/login"
                        className={styles.profile}
                    >
                        <FontIcon variant="avatar" />
                        <span>Войти</span>
                    </Button>
                </SetCookierForRedirectAfterLogin>
                
            }
            

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