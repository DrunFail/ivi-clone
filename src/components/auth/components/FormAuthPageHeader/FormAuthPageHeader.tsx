import { useRouter } from "next/router";
import { cookieParser } from "../../../../utils/cookieParser";
import styles from "./FormAuthPageHeader.module.scss";
import Button from "../../../UI/core/Button/Button";
import FontIcon from "../../../UI/FontIcon/FontIcon";

interface FormAuthPageHeaderProps {
    title: string
}

export default function FormAuthPageHeader({ title }: FormAuthPageHeaderProps) {
    const router = useRouter();
    const callbackUrl = cookieParser('callbackUrl')?.replace(/%2F/g, "/");
    


    return (
        <>
            <div className={styles.header}>
                <div className={styles.wrapper }>
                <h1>{title}</h1>  
                <Button
                    as="button"
                    onlyImage
                    onClick={() => router.push(callbackUrl ?? "/") }
                >
                    <FontIcon
                        size={20}
                        variant="close"
                    />
                        </Button>
                </div>
            </div>
        </>
    );
}
