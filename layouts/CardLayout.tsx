import Link from "next/link";
import {PostMetaData} from "../lib/types";

const CardLayout = ({postsMetaData}: { postsMetaData: PostMetaData[] }) => {
    return (
        <div className={'card-layout'}>
            {postsMetaData.map((metadata, index: number) => {
                    return (
                        <article key={metadata.title}>
                            <a href={`/posts/${metadata.id}`} key={metadata.title}>
                                <h3>{metadata.title}</h3>
                                <p>{metadata.description}</p>
                            </a>
                        </article>
                    )
                }
            )}
            <style jsx>{`
              article {
                border: 1px solid #e5e5e5;
                border-radius: 5px;
                padding: 1rem;
                margin-bottom: 10px;
                box-shadow: 0 0 0.6rem rgb(0 0 0 / 40%);
              }

              a {
                display: block;
              }

              h3 {
                font-size: 1.5rem;
              }


              p {
                font-size: 1rem;
              }
            `}</style>
        </div>
    )
}

export default CardLayout;