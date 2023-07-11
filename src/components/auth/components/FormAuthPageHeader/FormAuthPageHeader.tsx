import { useRouter } from "next/router";
import { cookieParser } from "../../../../utils/cookieParser";
import ButtonClose from "../../../UI/ButtonClose/ButtonClose";
import HorizontalLine from "../../../UI/HorizontalLine/HorizontalLine";
import styles from "./FormAuthPageHeader.module.scss";

interface FormAuthPageHeaderProps {
    title: string
}

export default function FormAuthPageHeader({ title }: FormAuthPageHeaderProps) {
    const router = useRouter();
    const callbackUrl = cookieParser('callbackUrl')?.replace(/%2F/g, "/");
    


    return (
        <>
            <div className={styles.header}>
                <h1>{title}</h1>  
                <ButtonClose onClick={() => router.push(callbackUrl ?? '/') } />
            </div>
            <HorizontalLine />
        </>
    );
}
