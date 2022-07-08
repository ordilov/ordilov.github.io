import Link from "next/link";
import Head from "next/head";
import {useState} from "react";
import Category from "./Category";
import {title} from "../lib/constants";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Blog"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <header>
            <div className={"menu bar"}>
                <input type="checkbox" id={"menu-button"} onChange={event => setIsOpen(event.target.checked)}/>
                <label htmlFor={"menu-button"}/>
            </div>
            <div className={"home"}>
                <Link href="/">
                    Ordinary
                </Link>
            </div>
            <div className={"about"}>
                <Link href='/about'><a>About</a></Link>
            </div>
        </header>
        {isOpen &&
            <aside className={"bar"}>
                <Category/>
            </aside>
        }

        <style jsx>{`
          header {
            display: grid;
            color: #0070f3;
            background-color: #1e1e1e;
            grid-template-columns: 32fr 40fr 25fr;
            grid-template-rows: 5rem;
            position: fixed;
            width: 100%;
            padding: 0.5rem 2rem;
            height: 5rem;
            z-index: 300;
            opacity: 0.95;
          }

          input[type="checkbox"] {
            display: none;
          }

          label {
            width: 2rem;
            height: 2rem;
            border: 0.3rem solid #FFFFFF;
            border-radius: 1rem;
            display: inline-block;
            margin-top: 1.5rem;
            margin-left: 2rem;
            cursor: pointer;
          }

          input[type="checkbox"]:checked + label {
            border-color: #7bd694;
          }

          aside {
            position: fixed;
            margin-top: 5rem;
          }

          @media (max-width: 1080px) {
            .bar {
              display: none;
            }

            .space {
              grid-template-columns: 1fr;
            }
          }

          .home {
            font-size: 2.5rem;
            display: flex;
            padding-left: 2rem;
            padding-bottom: 1rem;
            align-items: center;
            text-decoration: none;
          }

          .about {
            font-size: 1.5rem;
            display: flex;
            padding-bottom: 1rem;
            padding-right: 2rem;
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
}


export default Header;