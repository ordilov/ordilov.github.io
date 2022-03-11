import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Header.module.scss";

const Header = () => {
    return (
        <>
            <Head>
                <title>Ordinary</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Blog"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <Link href="/">
                        Ordinary
                    </Link>
                </div>
                <div className={styles.headerRight}>
                    <Link href='/about'><a>About</a></Link>
                </div>
            </div>
        </>
    )
}

export default Header;