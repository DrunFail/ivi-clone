import Button from "../Button/Button";

interface LogoutButtonProps {
    handleLogout?: () => void
}
export default function LogoutButton({handleLogout }:LogoutButtonProps) {
    return (
        <Button color="red" onClick={handleLogout}>
            Выйти
        </Button>
    );
}