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
        <header>
            <div className={"home"}>
                <Link href="/">
                    Ordinary
                </Link>
            </div>
            <div className={"headerRight"}>
                <Link href='/about'><a>About</a></Link>
            </div>
        </header>

        <style jsx>{`
          header {
            display: grid;
            color: #0070f3;
            background-color: #1e1e1e;
            padding: 20px;
            border-bottom: 2px solid #e5e5e5;
            border-radius: 100px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 100px;
          }

          .home {
            font-size: 24pt;
            font-family: 'system-ui', serif;
            display: flex;
            align-items: center;
            text-decoration: none;
          }

          .headerRight {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          }

          @media (min-width: 720px) {
            header {
              max-width: 50rem;
              padding: 0 2rem;
              margin: 0 auto;
            }
          }
        `}</style>
    </>


export default Header;