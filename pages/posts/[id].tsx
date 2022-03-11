import Header from "../../components/Header";
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {getAllPostsPath, getPostData} from "../../lib/mdx";
import styles from "../../styles/Home.module.scss";
import MDXComponents from "../../components/MDXComponents";
import PostLayout from "../../layouts/PostLayout";

const Post = ({metadata, mdxSource}: { metadata: any, mdxSource: MDXRemoteSerializeResult }) => {
    return (
        <div className={styles.container}>
            <Header/>
            <PostLayout frontMatter={metadata}>
                <MDXRemote {...mdxSource} components={MDXComponents}/>
            </PostLayout>
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

export async function getStaticProps({params}: {
                                         params: {
                                             id: string
                                         }
                                     }
) {

    const {metadata, mdxSource} = await getPostData(params.id);

    return {
        props: {
            metadata,
            mdxSource,
        }
    }
}

export default Post