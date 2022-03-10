import Link from "next/link";
import Head from "next/head";

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
            <div className={'header'}>
                <Link href="/">
                    <a>
                        <img src="/vercel.svg" alt="logo"/>
                    </a>
                </Link>

                <Link href='/about'><a>About</a></Link>
            </div>
        </>
    )
}

export default Header;