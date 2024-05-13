import Image from "next/image";
import logo from "../../../../assets/SVG/Logo/Logo.svg";
import { Link } from "../../../../navigation";

export default function HeaderLogo() {
    return (
        <Link
            href="/"
            data-testid="header-home-link"
            aria-label="перейти на главную страницу"
        >
            <Image
                src={logo}
                alt=""
                height={48}
                width={66}
            />
        </Link>
    );
}