import {PostMetaData} from "../lib/types";
import {getPageMetadataById} from "../lib/mdx";
import PageLayout from "../layouts/PageLayout";

export default function Home({data, totalPages, id}: { data: PostMetaData[], totalPages: number, id: number }) {
    return (
        <PageLayout data={data} totalPages={totalPages} id={id}/>
    )
}

export async function getStaticProps() {
    const {data, totalPages} = getPageMetadataById(1);
    return {
        props: {
            data,
            totalPages,
            id: 1
        }
    }
}