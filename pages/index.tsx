import CardLayout from "../layouts/CardLayout";
import {PostMetaData} from "../lib/types";
import {getPageMetadata} from "../lib/mdx";
import PageNavigation from "../components/PageNavigation";

export default function Home({data, totalPages}: { data: PostMetaData[], totalPages: number }) {
    return (
        <div className={"container"}>
            <CardLayout postsMetaData={data}/>
            <PageNavigation length={totalPages} currentPage={1}/>
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

export async function getStaticProps() {
    const {data, totalPages} = getPageMetadata(1);
    return {
        props: {
            data,
            totalPages
        }
    }
}