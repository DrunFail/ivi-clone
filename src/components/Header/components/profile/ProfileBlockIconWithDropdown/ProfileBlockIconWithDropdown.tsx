import Image from "next/image";
import user from "../../../../../assets/SVG/Users/User.svg";
import HeaderDropdownWindow from "../../HeaderDropdownWindow/HeaderDropdownWindow";
import useHeaderDropdownWindow from "../../HeaderDropdownWindow/useHeaderDropdownWindow";
import ProfileDropdownWindow from "../ProfileDropdownWindow/ProfileDropdownWindow";
import styles from "./ProfileBlockIconWithDropdown.module.scss";

interface ProfileBlockIconWithDropdownProps {
    handlerHeaderHover: (status: boolean) => void
}
export default function ProfileBlockIconWithDropdown({ handlerHeaderHover }: ProfileBlockIconWithDropdownProps) {
    const { visible, handleVisible } = useHeaderDropdownWindow();

    const handleVisibleR = (status:boolean) => {
        handleVisible(status)
        handlerHeaderHover(status)
    }
    

    return (
        <div
            className={styles.container }
            onMouseLeave={() => handleVisibleR(false)}
            onMouseEnter={() => handleVisibleR(true)}
            style={{ blockSize: "100%", display: "flex", alignItems: "center" }} >
            <Image src={user} alt="" width={25} height={25 } />
            {visible &&
                <HeaderDropdownWindow>
                    <ProfileDropdownWindow />
                </HeaderDropdownWindow>
            }

        </div>
    );
}