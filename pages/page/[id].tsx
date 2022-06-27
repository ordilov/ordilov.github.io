import {getAllPagesPath, getPageMetadata} from "../../lib/mdx";
import {PostMetaData} from "../../lib/types";
import CardLayout from "../../layouts/CardLayout";
import PageNavigation from "../../components/PageNavigation";

export default function Post({
                                 data,
                                 totalPages,
                                 id
                             }: { data: PostMetaData[], totalPages: number, id: number }) {
    return (
        <div className={"container"}>
            <CardLayout postsMetaData={data}/>
            <PageNavigation length={totalPages} currentPage={id}/>
            <style jsx>{`
              @media (min-width: 720px) {
                .container {
                  max-width: 50rem;
                  padding: 0 2rem;
                  margin: 0 auto;
                }
              }
            `}</style>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllPagesPath();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}: {
    params: {
        id: string
    }
}) {
    const id = parseInt(params.id);
    const {totalPages, data} = getPageMetadata(id);
    return {
        props: {
            data,
            totalPages,
            id
        }
    }
}