import { FormattedMessage } from "react-intl";
import MyButton from "../MyButton/MyButton";
import Image from "next/image";
import reward from "../../../assets/SVG/Reward/Reward.svg";


export default function ButtonActivateCertificate() {
    return (
        <MyButton type="button" bg_color="footer" size="large">
            <Image src={reward} alt="" />
            <p>
                <FormattedMessage id="CertificateActivation" />
            </p>
        </MyButton>
    );
}