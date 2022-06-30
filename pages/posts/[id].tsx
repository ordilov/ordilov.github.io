import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {getAllPostsPath, getPostData} from "../../lib/mdx";
import MDXComponents from "../../components/MDXComponents";
import PostLayout from "../../layouts/PostLayout";

const Post = ({metadata, mdxSource}: { metadata: any, mdxSource: MDXRemoteSerializeResult }) => {
    return (
        <div>
            <PostLayout frontMatter={metadata}>
                <MDXRemote {...mdxSource} components={MDXComponents}/>
            </PostLayout>
            <style jsx global>{`
              .content {
                max-width: 40rem;
              }
            `}</style>
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