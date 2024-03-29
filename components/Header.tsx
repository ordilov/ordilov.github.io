import Link from "next/link";
import {useState} from "react";
import Category from "./Category";
import {title} from "../lib/constants";
import Square from "./Square";

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

                    <span className={"link"}>
                        <Square size={1}/>
                        About
                    </span>
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
            grid-template-columns: 30fr 40fr 30fr;
            grid-template-rows: 2rem;
            position: fixed;
            width: 100%;
            padding: 0.5rem 2rem;
            height: 3rem;
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
            border: 0.3rem solid #DDDDDD;
            border-radius: 1rem;
            display: inline-block;
            cursor: pointer;
          }

          label:hover {
            background-color: #484848;
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
            font-size: 2rem;
            display: flex;
            align-items: center;
            text-decoration: none;
          }

          .about {
            font-size: 1.5rem;
            display: flex;
            margin-left: auto;
          }

          .category {
            display: flex;
            align-items: center;
          }

        `}</style>
    </>
}


export default Header;