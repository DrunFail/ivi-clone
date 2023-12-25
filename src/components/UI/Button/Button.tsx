import Link from "next/link";
import styles from "./Button.module.scss";


type BaseProps = {
    color?: "dark" | "red",
    children?: React.ReactNode,
    className?: string,
    onlyImage?: boolean

}

type ButtonProps = BaseProps & Omit<React.HTMLAttributes<HTMLButtonElement>,keyof BaseProps> & {
    type: "button" | "submit",
    as: "button"
}

type LinkProps = BaseProps & Omit<typeof Link, keyof BaseProps> & {
    href: string,
    as: "link"
}

type ButtonOrLink = ButtonProps | LinkProps

type ButtonTest<T> = T extends { as: "button" } ? ButtonProps : LinkProps



export default function Button({ children, className, color = "dark", onlyImage = false, ...rest }: ButtonTest<ButtonOrLink>) {
    const { as } = rest

    const defaultClasses = onlyImage
        ? ``
        : ` ${styles.button}
            ${styles[color]}`

    const mergeClasses = defaultClasses + ' ' + (className ?? " ")

    return (
        <>
            {as === "button" &&
                <button
                    className={mergeClasses}
                    {...rest}
                >
                    {children}
                </button>
            }

            {as === "link" &&
                <Link
                    className={mergeClasses}
                    {...rest}
                >
                    {children}
                </Link>
            }
        </>
    );
}