import {getAllPagesPath, getPageMetadataById} from "../../lib/mdx";
import {PostMetaData} from "../../lib/types";
import PageLayout from "../../layouts/PageLayout";

export default function Post({
                                 data,
                                 totalPages,
                                 id
                             }: { data: PostMetaData[], totalPages: number, id: number }) {
    return (
        <PageLayout data={data} totalPages={totalPages} id={id}/>
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
    const {totalPages, data} = getPageMetadataById(id);
    return {
        props: {
            data,
            totalPages,
            id
        }
    }
}