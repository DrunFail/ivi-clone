import { FormattedMessage } from "react-intl";
import Image from "next/image";
import reward from "../../../assets/SVG/Reward/Reward.svg";
import Button from "../Button/Button";


export default function ButtonActivateCertificate() {
    return (
        <Button>
            <Image src={reward} alt="" />
            <p>
                <FormattedMessage id="CertificateActivation" />
            </p>
        </Button>
    );
}