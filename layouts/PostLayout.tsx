import {useRouter} from "next/router";
import styles from "../styles/Post.module.scss";

export default function PostLayout({children, frontMatter}: { children: any, frontMatter: any }) {
    const router = useRouter()
    const slug = router.asPath.replace('/posts', '')
    const dateString = new Date(frontMatter.date).toLocaleDateString();
    const author = 'ordilov /';
    const date = dateString.slice(0, dateString.length - 1);

    return (
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
    )
}