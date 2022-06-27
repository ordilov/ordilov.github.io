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
                                <p className={"date"}>
                                    {
                                        new Date(metadata.date!!)
                                            .toLocaleDateString('ko-KR')
                                            .slice(0, -1)
                                    }
                                </p>
                            </a>
                        </article>
                    )
                }
            )}
            <style jsx>{`
              article {
                border: 1px solid #e5e5e5;
                border-radius: 10px;
                padding: 0.8rem 1rem;
                margin-bottom: 10px;
              }

              article:hover {
                box-shadow: 0 0 0.6rem rgb(0 0 0 / 60%);
                transform: translate(0, -0.4rem);
                color: #7bd694;
                background-color: #4f4c4c;
              }

              a {
                display: block;
              }

              h3 {
                margin: 0 0.5rem;
                font-size: 1.5rem;
              }

              p {
                font-size: 1rem;
                margin: 1rem 0.8rem 0.4rem 0.5rem;
              }

              .date {
                color: #888888;
                font-size: 0.8rem;
              }

              .card-layout {
                margin: 0 auto;
                justify-content: center;
                width: 40rem;
              }
            `}</style>
        </div>
    )
}

export default CardLayout;