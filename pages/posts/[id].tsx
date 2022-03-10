import Header from "../../components/Header";
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {getAllPostsPath, getPostData} from "../../lib/get-all-posts-data";
import {serialize} from "next-mdx-remote/serialize";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const Post = ({postContent}: { postContent: MDXRemoteSerializeResult }) => {
    return (
        <div className={""}>
            <Header/>

            <article className={""}>
                <MDXRemote {...postContent} />
            </article>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostsPath();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}: { params: { id: string } }) {
    const postData = await getPostData(params.id);

    const mdxSource = await serialize(postData.content, {
        mdxOptions: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex]
        }
    });
    return {
        props: {
            postMetadata: postData.metadata,
            postContent: mdxSource,
            id: params.id,
        }
    }
}


export default Post
