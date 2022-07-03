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
            <div className={"about"}>
                <Link href='/about'><a>About</a></Link>
            </div>
        </header>

        <style jsx>{`
          header {
            display: grid;
            color: #0070f3;
            background-color: #1e1e1e;
            border-bottom: 1px solid #e5e5e5;
            grid-template-columns: 1fr  1fr;
            grid-template-rows: 5rem;
            position: fixed;
            width: 100%;
            padding: 0.5rem 2rem;
            //left: 25%;
            height: 5rem;
            z-index: 300;
            opacity: 0.95;
          }

          .home {
            font-size: 2.5rem;
            display: flex;
            align-items: center;
            text-decoration: none;
          }

          .about {
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          }

          .category {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
          }
        `}</style>
    </>


export default Header;