import { FormattedMessage } from "react-intl";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";

export default function WatchAllDeviceTitle({ movieName }: {movieName:string}) {
    return (
        <SectionTitle>
            <FormattedMessage
                id="WatchOnAllDevices"
                values={{ value: movieName }}
            />
        </SectionTitle>
    );
}