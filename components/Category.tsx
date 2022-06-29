import {CategoryType} from "../lib/types";
import Link from "next/link";

export default function Category() {
    return (
        <aside>
            <h3>Category</h3>
            <ul>
                {
                    Object.keys(CategoryType).map((key) => {
                        return (
                            <li key={key}>
                                <Link href={`/category/${key.toLowerCase()}`}>
                                    <a>{key}</a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <style jsx>{`
              aside {
                position: sticky;
                top: 60px;
                text-align: left;
                padding-left: 5rem;
                height: calc(100vh - 60px);
              }

              h3 {
                font-size: 2rem;
              }

              ul {
                list-style: none;
                padding-left: 0;
              }

              li {
                font-size: 1.3rem;
                height: 3rem;
                width: 10rem;
                padding-left: 2rem;
                padding-top: 0.5rem;
                margin: 0 0;
              }

              li:hover {
                background-color: #4d4747;
                box-shadow: 0 0 0.6rem rgb(0 0 0 / 60%);
                transform: translate(0, -0.4rem);
              }
            `}</style>
        </aside>
    )
}
