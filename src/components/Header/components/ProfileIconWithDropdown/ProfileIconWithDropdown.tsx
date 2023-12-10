import Image from "next/image";
import user from "../../../../assets/SVG/Users/User.svg";
import styles from "./ProfileIconWithDropdown.module.scss";
import { useState } from "react";
import HeaderPortal from "../../portal/HeaderPortal";
import HeaderPortalWrapper from "../../portal/HeaderPortalWrapper/HeaderPortalWrapper";
import ProfileDropdownWindow from "./ProfileDropdownWindow/ProfileDropdownWindow";

interface ProfileBlockIconWithDropdownProps {
    handlerHeaderHover: (status: boolean) => void
}
export default function ProfileBlockIconWithDropdown({ handlerHeaderHover }: ProfileBlockIconWithDropdownProps) {
    const [isVisiblePortal, setIsVisiblePortal] = useState(false);


    const handleVisibleProfileDropdown = (status:boolean) => {
        setIsVisiblePortal(status)
        handlerHeaderHover(status)
    }
   

    return (
        <div
            className={styles.container }
            onMouseLeave={() => handleVisibleProfileDropdown(false)}
            onMouseEnter={() => handleVisibleProfileDropdown(true)}
            data-testid="profile-dropdown"
            >
            <Image src={user} alt="" width={25} height={25 } />

            
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