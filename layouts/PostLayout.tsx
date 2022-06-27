import {useRouter} from "next/router";
import {renderToString} from "react-dom/server";
import Toc from "../components/Toc";
import Profile from "../components/Profile";

export default function PostLayout({children, frontMatter}: { children: any, frontMatter: any }) {
    const router = useRouter()
    const slug = router.asPath.replace('/posts', '')
    const date = new Date(frontMatter.date).toLocaleDateString('ko-KR').slice(0, -1);

    const contentString = renderToString(children);
    const getHeadings = (source: string) => {
        const regex = /(<h2>(.*?)<\/h2>)|(<h3>(.*?)<\/h3>)/g;
        const regExpMatchArray = source.match(regex);
        if (!regExpMatchArray) return [];
        return regExpMatchArray!!.map((heading) => {
            const h3 = heading.match(/<h3>(.*?)<\/h3>/);
            let headingText = heading.replace(/(<h2>)|(<\/h2>)|(<h3>)|(<\/h3>)/g, "");
            const link = "#" + headingText
            return {
                text: headingText,
                link,
                depth: h3 ? 3 : 2
            };
        });

    };

    const headings = getHeadings(contentString);

    return (
        <div>
            <article className={"container"}>
                <Toc headings={headings}/>
                <div className={"head"}>
                    <h1>{frontMatter.title}</h1>
                    <Profile date={date}/>
                </div>
                {children}
            </article>
            <style jsx>{`
              article {
                display: block;
                margin: 0 auto;
                padding: 0 1rem;
              }

              @media (max-width: 800px) {
                aside {
                  position: static;
                  height: auto;
                }
              }

              h1 {
                font-size: 30pt;
                margin-bottom: 5px;
              }

              .head {
                margin-bottom: 2rem;
              }

              .container {
                width: 100%;
                max-width: 720px;
                margin: 0 auto;
                line-height: 1.625;
              }

              @media (min-width: 720px) {
                .container {
                  padding: 0 2rem;
                  margin: 0 auto;
                }
              }
            `}</style>
        </div>
    )
}