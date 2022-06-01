export default function Toc({headings}: { headings: { text: string, link: string, depth: number }[], }) {
    const heading = (heading: { text: string, link: string, depth: number }) => {
        return <>
            <a href={heading.link}> {heading.text}</a>
            <style jsx>{`
              a {
                display: block;
                margin-left: ${heading.depth * 20 - 40}px;
                padding-left: 0.3rem;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                width: ${180 - heading.depth * 20}px;
                text-decoration: none;
                color: #FFF;
                font-size: 8pt;
                border-bottom: 1px solid #ccc;
              }

              [aria-current]:not([aria-current="false"]) {
                font-weight: bold;
                color: red;
              }
            `}</style>
        </>
    }

    return <aside>
        <nav>
            {headings.map(({text, link, depth}) =>
                heading({text, link, depth})
            )}
        </nav>
        <style jsx>{`
          aside {
            position: absolute;
            right: 0;
            width: 200px;
            height: 100%;
          }

          nav {
            top: 200px;
            padding: 0 0 0 10px;
            display: inline-block;
            position: sticky;
          }

          @media (max-width: 1080px) {
            aside {
              visibility: hidden;
            }

          }
        `}</style>
    </aside>
}