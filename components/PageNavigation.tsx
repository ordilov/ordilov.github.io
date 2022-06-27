import Link from "next/link";

export default function PageNavigation({length, currentPage}: { length: number, currentPage: number }) {
    return (
        <nav>
            <ul>
                {
                    Array.from({length}, (_, i) =>
                        <li key={i} className={i + 1 === currentPage ? "current" : "page"}>
                            <Link href={`/page/${i + 1}`}>
                                <a>{i + 1}</a>
                            </Link>
                        </li>
                    )
                }
            </ul>
            <style jsx>{`
              nav {
                display: flex;
                text-align: center;
                margin: 0 auto;
                justify-content: center;
              }

              ul {
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
              }

              li {
                width: 4rem;
                margin: 0 0 0 0;
                padding: 0 0 0 0;
                border: 0;
                float: left;
                text-align: center;
              }

              li:hover {
                background-color: #333333;
                border-radius: 0.5rem;

              }

              a {
                text-align: center;
              }

              .current {
                background-color: #3f3c3c;
                border-radius: 0.5rem;
                pointer-events: none;
              }
            `}</style>
        </nav>
    )
}