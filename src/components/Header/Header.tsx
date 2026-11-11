
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link
                href="/"
                className={styles.logo}
                aria-label="tactile homepage"
            >
                tactile.
            </Link>

            <nav
                className={styles.navigation}
                aria-label="Main navigation"
            >
                <Link href="/" aria-current="page">
                    Index
                </Link>

                <Link href="/#journal">
                    Journal
                </Link>

                <Link href="/#about">
                    About
                </Link>
            </nav>
        </header>
    );
}
