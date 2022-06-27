import {getPageMetadataByCategory} from "../../lib/mdx";
import {CATEGORY_VALUES, PostMetaData} from "../../lib/types";
import PageLayout from "../../layouts/PageLayout";

export default function Category({
                                     data,
                                     totalPages,
                                     id
                                 }: { data: PostMetaData[], totalPages: number, id: number }) {
    return (
        <PageLayout data={data} totalPages={totalPages} id={id}/>
    )
}

export async function getStaticPaths() {
    const paths = CATEGORY_VALUES.map((key) => {
        return {
            params: {
                id: key.toLowerCase()
            }
        }
    });

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
    const data = getPageMetadataByCategory(params.id);

    return {
        props: {
            data,
            totalPages: 1,
            id: params.id
        }
    }
}