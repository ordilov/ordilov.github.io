import {useRouter} from "next/router";

export default function PostLayout({children, frontMatter}: { children: any, frontMatter: any }) {
    const router = useRouter()
    const slug = router.asPath.replace('/posts', '')
    const dateString = new Date(frontMatter.date).toLocaleDateString();
    const author = 'ordilov /';
    const date = dateString.slice(0, dateString.length - 1);

    return (
        <div>
            <h1>{frontMatter.title}</h1>
            {author} {date}
            {children}
        </div>
    )
}