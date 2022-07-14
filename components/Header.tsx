import Link from "next/link";
import {useState} from "react";
import Category from "./Category";
import {title} from "../lib/constants";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <>
        <header>
            <div className={"menu bar"}>
                <input type="checkbox" id={"menu-button"} onChange={event => setIsOpen(event.target.checked)}/>
                <label htmlFor={"menu-button"}/>
            </div>
            <div className={"home"}>
                <Link href="/">
                    <span className={"link"}>{title}</span>
                </Link>
            </div>
            <div className={"about"} id={"about"}>
                <Link href='/about'>
                    <span className={"link"}>About</span>
                </Link>
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

          .link:hover {
            color: #7bd694;
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

          label:hover {
            border-color: #7bd694;
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
            
            header {
               grid-template-columns: 1fr 1fr;
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
          }
        `}</style>
    </>
}


export default Header;