import ButtonWithHint from '../../UI/ButtonWithHint/ButtonWithHint';
import FontIcon from '../../UI/FontIcon/FontIcon';

interface AdminOverlayIconProps {
    editHandler: () => void;
    deleteHandler: () => void;
}
export default function AdminOverlayIcon({ editHandler, deleteHandler }: AdminOverlayIconProps) {
    return (
        <>
            <ButtonWithHint description="button.hint.edit" actionHandler={editHandler}>
                <FontIcon variant="bookmark2" size={20} />
            </ButtonWithHint>
            <ButtonWithHint description="button.hint.delete" actionHandler={deleteHandler}>
                <FontIcon variant="star" size={20} />
            </ButtonWithHint>
        </>
    );
}
