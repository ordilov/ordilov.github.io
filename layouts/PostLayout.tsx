import {useRouter} from "next/router";
import styles from "../styles/Post.module.scss";
import {renderToString} from "react-dom/server";
import Toc from "../components/toc";

export default function PostLayout({children, frontMatter}: { children: any, frontMatter: any }) {
    const router = useRouter()
    const slug = router.asPath.replace('/posts', '')
    const dateString = new Date(frontMatter.date).toLocaleDateString('ko-KR');
    const author = 'ordilov /';
    const date = dateString.slice(0, dateString.length - 1);

    const contentString = renderToString(children);
    const getHeadings = (source: string) => {
        const regex = /<h2>(.*?)<\/h2>/g;
        if (!source.match(regex) || source.match(regex) == null) return [];
        return source.match(regex)!!.map((heading) => {
            const headingText = heading.replace("<h2>", "").replace("</h2>", "");
            const link = "#" + headingText
            return {
                text: headingText,
                link,
            };
        });

    };

    const headings = getHeadings(contentString);

    return (
        <div>
            <Toc headings={headings}/>
            <article className={styles.container}>
                <div className={styles.head}>
                    <h1 className={styles.title}>{frontMatter.title}</h1>
                    <div className={styles.meta}>
                        <img src={"/profile.png"} className={styles.avatar} alt={"profile"}/>
                        <div className={styles.profile}>{author} {date}</div>
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
            `}</style>
        </div>
    )
}