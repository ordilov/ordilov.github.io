import CardLayout from "../layouts/CardLayout";
import {PostMetaData} from "../lib/types";
import {getHomePostMetadata} from "../lib/mdx";

export default function Home({postsMetaData}: { postsMetaData: PostMetaData[] }) {

    return (
        <div className={"container"}>
            <CardLayout postsMetaData={postsMetaData}/>
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
    const postsMetaData = getHomePostMetadata().slice(0, 20);
    return {
        props: {
            postsMetaData
        }
    }
}