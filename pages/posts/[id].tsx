import Header from "../../components/Header";
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {getAllPostsPath, getPostData} from "../../lib/mdx";
import MDXComponents from "../../components/MDXComponents";
import PostLayout from "../../layouts/PostLayout";
import Footer from "../../components/Footer";

const Post = ({metadata, mdxSource}: { metadata: any, mdxSource: MDXRemoteSerializeResult }) => {
    return (
        <div className={'container'}>
            <Header/>

            <PostLayout frontMatter={metadata}>
                <MDXRemote {...mdxSource} components={MDXComponents}/>
            </PostLayout>
            <Footer/>
            <style jsx>{`
              .container {
                position: relative;
                padding: 0 2rem;
              }

              @media (min-width: 900px) {
                .container {
                  position: relative;
                  max-width: 1080px;
                  padding: 0 2rem;
                  margin-left: auto;
                  margin-right: auto;
                }
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