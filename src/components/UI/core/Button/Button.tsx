import { Link } from "@/i18n/navigation";
import styles from "./Button.module.scss";

type BaseProps = {
    color?: "dark" | "red",
    children?: React.ReactNode,
    className?: string,
    onlyImage?: boolean,
    size?: "default" | "mini",
}

type ButtonProps = BaseProps & Omit<React.HTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button",
    type?: "button" | "submit" | "reset",
    disabled?:boolean
}

type LinkProps = BaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "link",
    href: string

}

type ButtonOrLink = ButtonProps | LinkProps

type ButtonTest<T> = T extends { as: "button" } ? ButtonProps : LinkProps


export default function Button({ ...props } : ButtonOrLink) {

    const defaultClasses = props.onlyImage
        ? `${styles.noStyle}`
        : ` ${styles.button}
            ${styles[props.color ?? "dark"]}
            ${styles[props.size ?? "default"]}`

    const mergeClasses = defaultClasses + ' ' + (props.className ?? " ")

    if (props.as === "link") {

        const { children, className, color, onlyImage, as, href, ...rest } = props

        return (
            <Link
                className={mergeClasses}
                href={href}
                {...rest}
            >
                {children}
            </Link>
        )
    } else {
        const { children, className, color, onlyImage, as,type="button", ...rest } = props
        return (
            <button
                className={mergeClasses}
                type={type}
                {...rest}
            >
                {children}
            </button>
        )
    }

}