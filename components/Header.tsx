import Link from "next/link";
import Head from "next/head";

const Header = () =>
    <>
        <Head>
            <title>Ordinary</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Blog"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className={"header"}>
            <div className={"headerLeft"}>
                <Link href="/">
                    Ordinary
                </Link>
            </div>
            <div className={"headerRight"}>
                <Link href='/about'><a>About</a></Link>
            </div>
        </div>
        <style jsx>{`
          .header {
            color: #0070f3;
            background-color: #1e1e1e;
            padding: 20px;
            border-bottom: 1px solid #e5e5e5;
          }

          .headerLeft {
            font-size: 20pt;
            font-family: 'Source Sans Pro', sans-serif;
            display: flex;
            flex: 1;
            align-items: center;
            text-decoration: none;
          }

          .headerRight {
            display: flex;
            flex: 3;
            align-items: center;
            flex-direction: row-reverse;
          }
        `}</style>
    </>


export default Header;