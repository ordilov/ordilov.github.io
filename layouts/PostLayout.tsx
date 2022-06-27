import {useRouter} from "next/router";
import {renderToString} from "react-dom/server";
import Toc from "../components/Toc";

export default function PostLayout({children, frontMatter}: { children: any, frontMatter: any }) {
    const router = useRouter()
    const slug = router.asPath.replace('/posts', '')
    const dateString = new Date(frontMatter.date).toLocaleDateString('ko-KR');
    const author = 'ordilov /';
    const date = dateString.slice(0, dateString.length - 1);

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
                    <h1 className={"title"}>{frontMatter.title}</h1>
                    <div className={"meta"}>
                        <img src={"/profile.png"} className={"avatar"} alt={"profile"}/>
                        <div className={"profile"}>{author} {date}</div>
                    </div>
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

              .title {
                font-size: 30pt;
                margin-bottom: 5px;
              }

              .head {
                margin-bottom: 2rem;
              }

              .avatar {
                margin-right: 0.5rem;
              }

              .meta {
                display: flex;
                margin-right: 0.5rem;
              }

              .profile {
                color: #A0AEC0;
                line-height: 1.5;
                margin-right: 0.5rem;
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