import FontIcon from "../../FontIcon/FontIcon";

export default function Arrow({ visible }: {visible:boolean}) {
    return (
        <>
            <FontIcon variant={visible ? "arrowUp" : "arrowDown"} size={6} />
        </>
    );
}