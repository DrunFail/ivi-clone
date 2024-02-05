import Image from "next/image";
import { FormattedMessage } from "react-intl";
import diamond from "../../../assets/SVG/Diamond/Diamond.svg";
import Button from "../Button/Button";


export default function ButtonSubscription() {
    return (
        <Button>
            <Image src={diamond} alt="" />
            <p>
                   <FormattedMessage id="ConnectSubscription" />
                </p>
        </Button>
    );
}