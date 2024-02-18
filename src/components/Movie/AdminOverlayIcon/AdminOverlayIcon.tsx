import ButtonDeleteWithHint from "../../AdminDashboard/components/ButtonDeleteWithHint/ButtonDeleteWithHint";
import ButtonEditWithHint from "../../AdminDashboard/components/ButtonEditWithHint/ButtonEditWithHint";

interface AdminOverlayIconProps {
    editHandler: () => void,
    deleteHandler: () => void
}
export default function AdminOverlayIcon({editHandler, deleteHandler }:AdminOverlayIconProps) {
    return (
        <>
            <ButtonEditWithHint onClickHandler={editHandler} />
            <ButtonDeleteWithHint onClickHandler={deleteHandler} />
        </>
    );
}