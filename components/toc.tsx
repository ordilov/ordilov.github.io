export default function Toc({headings}: { headings: { text: string, link: string }[] }) {

    return <aside>
        <nav>
            {headings.map(({text, link}) =>
                <a href={link}>{text}</a>
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
            display: inline-block;
            position: sticky;
          }
     
          a {
            display: block;
            padding: 10px;
            text-decoration: none;
            color: #000;
            font-size: 8pt;
            border-bottom: 1px solid #ccc;
          }

          @media (max-width: 1080px) {
            aside {
              visibility: hidden;
            }

          }
        `}</style>
    </aside>
}