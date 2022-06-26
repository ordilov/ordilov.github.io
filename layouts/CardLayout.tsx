import Link from "next/link";
import {PostMetaData} from "../lib/types";

const CardLayout = ({postsMetaData}: { postsMetaData: PostMetaData[] }) => {
    return (
        <div className={'card-layout'}>
            {postsMetaData.map((metadata, index: number) => {
                    return (
                        <div className='card-container' key={metadata.title}>
                            <div className='info-container'>
                                <div className='description-container'>
                                    <Link href={`/posts/${metadata.id}`} key={metadata.title}>
                                        <a className={"CardLink"}>{metadata.title}</a>
                                    </Link>
                                    <p className='description'>{metadata.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
            <style jsx>{`
              .CardLink {
                font-size: 19pt;
              }
            `}</style>
        </div>
    )
}

export default CardLayout;